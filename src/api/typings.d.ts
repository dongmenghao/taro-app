declare namespace API {
  type LoginReq = {
    username: string;
    password: string;
  }

  type LoginRes = {
    access_token: string;
  }

  // 分页返回类型
  type PageResult<T = any> = BasicResult & {
    data: {
      list: T[];
      pageNum: number;
      pageSize: number;
      total: number;
    };
  };

  type BasicResult<T = any> = {
    code: number;
    message: string;
    data: T;
    success: number;
  };
}
