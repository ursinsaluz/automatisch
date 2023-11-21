import { IGlobalVariable } from '@automatisch/types';
import getCurrentUser from '../../amazon-s3/common/get-current-user';

const isStillVerified = async ($: IGlobalVariable) => {
  const currentUser = await getCurrentUser($);
  return !!currentUser.resourceName;
};

export default isStillVerified;
