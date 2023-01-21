interface InputStoreParams {
  placeholder?: string;
}

export class InputStore {
  params: InputStoreParams;

  constructor(params?: InputStoreParams) {
    if (params) this.params = params;
  }
}
