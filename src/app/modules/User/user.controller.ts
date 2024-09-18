import httpStatus from 'http-status';
import { userServices } from './user.service';

const createUser = catchAsync(async (req: any, res: any) => {
  const user = req.body;
  console.log({ user });

  const result = await userServices.createUserIntoDB(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};