import { api } from '@/apis';
import { BreedData } from '@/types';

const getBreeds = async () => {
  const res = await api.get<BreedData>('/v1/common/breeds');
  return res.data;
};

const ProfileAPIs = {
  getBreeds,
};

export default ProfileAPIs;
