import axios from "axios";
import React, { useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem, Input } from "@heroui/react";

const API_BASE_URL = "https://provinces.open-api.vn/api";

export const fetchProvinces = async () => {
  const response = await axios.get(`${API_BASE_URL}/p`);
  return response.data;
};

export const fetchDistricts = async (provinceCode: string) => {
  const response = await axios.get(`${API_BASE_URL}/p/${provinceCode}?depth=2`);
  return response.data.districts;
};

export const fetchWards = async (districtCode: string) => {
  const response = await axios.get(`${API_BASE_URL}/d/${districtCode}?depth=2`);
  return response.data.wards;
};

interface Location {
  code: number;
  name: string;
}

const AddressForm: React.FC = () => {
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedWard, setSelectedWard] = useState<string | null>(null);

  useEffect(() => {
    const loadProvinces = async () => {
      const data = await fetchProvinces();
      setProvinces(data);
    };
    loadProvinces();
  }, []);

  const handleProvinceChange = async (provinceCode: string) => {
    setSelectedProvince(provinceCode);
    setSelectedDistrict(null);
    setSelectedWard(null);
    const data = await fetchDistricts(provinceCode);
    setDistricts(data);
    setWards([]);
  };

  const handleDistrictChange = async (districtCode: string) => {
    setSelectedDistrict(districtCode);
    setSelectedWard(null);
    const data = await fetchWards(districtCode);
    setWards(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Tỉnh/Thành phố */}
      <Autocomplete
        isRequired
        label="Tỉnh/Thành phố"
        selectedKey={selectedProvince || undefined}
        isClearable={false}
        onSelectionChange={(key) => handleProvinceChange(key as string)}
      >
        {provinces.map((province) => (
          <AutocompleteItem key={province.code}>{province.name}</AutocompleteItem>
        ))}
      </Autocomplete>

      {/* Quận/Huyện */}
      <Autocomplete
        isRequired
        label="Quận/Huyện"
        isDisabled={!selectedProvince}
        selectedKey={selectedDistrict || undefined}
        isClearable={false}
        onSelectionChange={(key) => handleDistrictChange(key as string)}
      >
        {districts.map((district) => (
          <AutocompleteItem key={district.code}>{district.name}</AutocompleteItem>
        ))}
      </Autocomplete>

      {/* Phường/Xã */}
      <Autocomplete
        isRequired
        label="Phường/Xã"
        isDisabled={!selectedDistrict}
        selectedKey={selectedWard || undefined}
        isClearable={false}
        onSelectionChange={(key) => setSelectedWard(key as string)}
      >
        {wards.map((ward) => (
          <AutocompleteItem key={ward.code}>{ward.name}</AutocompleteItem>
        ))}
      </Autocomplete>

      {/* Địa chỉ chi tiết */}
      <Input isRequired label="Địa chỉ" placeholder="Nhập địa chỉ chi tiết" />
    </div>
  );
};

export default AddressForm;
