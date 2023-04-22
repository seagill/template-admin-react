import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '@/service/system/user';
import { getToken, removeToken } from '@/utils/token';
import router from '@/router';
export interface IUserInfo {
  username: string;
  motto: string;
  mobile: string;
  avatar: string;
  dept: string;
  site: string;
  professional: string;
  alias: string;
  team: string;
  landline: string;
  superior: string;
}

interface IUserInit {
  isLogin: boolean;
  userInfo: IUserInfo | null;
}

const initialState: IUserInit = {
  isLogin: !!getToken(),
  userInfo: null,
};

export const getUserInfo = createAsyncThunk('user/getUserInfo', async () => {
  const { data } = await userApi.getUserInfo();

  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setloginFlag(state, action) {
      state.isLogin = action.payload;
    },
    logout(state) {
      state.isLogin = false;
      removeToken();

      router.navigate(`${router.basename}/login`);
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const { setloginFlag, logout } = userSlice.actions;

export default userSlice.reducer;
