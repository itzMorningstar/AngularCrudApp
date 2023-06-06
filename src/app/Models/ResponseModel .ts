export interface ResponseModel {
    responseStatus: ResponseStatus;
    errorsList: KeyValuePair<string, string>[];
    metaData: MetaData;
    message: string;
    data: any;
  }
  
  interface MetaData {
    totalPages: number;
    nextPage: string;
    prevPage: string;
    limit: number;
    currentPage: number;
  }
  
  interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
  }
  enum ResponseStatus {
    Success = 200,
    Error = 500,
    NotFound = 404,
    Forbidden = 403
  }