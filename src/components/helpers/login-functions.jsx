

export const checkRoleToRedirect = (navigate, data) => {
  data.role_is_client === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/profile`)
    : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/client`);
};