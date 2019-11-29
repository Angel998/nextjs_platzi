const asyncHandler = funct => () =>
  Promise.resolve(funct()).catch(err => {
    console.log(err);
  });

export default asyncHandler;
