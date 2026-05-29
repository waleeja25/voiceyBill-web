import { apiClient } from "@/app/api-client";
import { ChangePasswordRequest, ChangePasswordResponse, UpdateUserResponse } from "./userType";

export const userApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation<UpdateUserResponse, FormData>({
      query: (formData) => ({
        url: "/user/update",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["analytics", "transactions"],
    }),
    changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (body) => ({
        url: "/user/change-password",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useUpdateUserMutation, useChangePasswordMutation } = userApi;
