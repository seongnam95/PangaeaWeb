import { createSlice } from '@reduxjs/toolkit';
import {
  HousingType,
  LandType,
  ApartmentType,
  ShopType,
  StudioType,
} from 'components/molecules/PropertyItem/Category';

export interface Property {
  value: {
    pk: string;
    imgUrl?: string;
    transaction: number;

    housing?: HousingType;
    land?: LandType;
    apart?: ApartmentType;
    shop?: ShopType;
    studio?: StudioType;

    address: {
      full: string;
      siNm?: string;
      sggNm?: string;
      emdNm?: string;
      liNm?: string;
      bun?: string;
      ji?: string;
      dong?: string;
      ho?: string;
      detail?: string;
    };

    price: {
      amount: number;
      rent?: number;
      admin?: number;
      loan?: number;
    };

    master: {
      name?: string;
      business: string;
      businessCode: string;
    };
  };
}

const initialState: Property = {
  value: {
    pk: '',
    imgUrl: '',
    transaction: 0,
    address: { full: '' },
    price: { amount: 0 },
    master: { business: '', businessCode: '' },
  },
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default propertySlice.reducer;
