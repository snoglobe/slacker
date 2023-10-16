// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message connectrpc.eliza.v1.SyncRequest
 */
export class SyncRequest extends Message<SyncRequest> {
  /**
   * @generated from field: string project = 1;
   */
  project = "";

  constructor(data?: PartialMessage<SyncRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.eliza.v1.SyncRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncRequest {
    return new SyncRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncRequest {
    return new SyncRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncRequest {
    return new SyncRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SyncRequest | PlainMessage<SyncRequest> | undefined, b: SyncRequest | PlainMessage<SyncRequest> | undefined): boolean {
    return proto3.util.equals(SyncRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.eliza.v1.SyncResponse
 */
export class SyncResponse extends Message<SyncResponse> {
  /**
   * @generated from field: string response = 1;
   */
  response = "";

  constructor(data?: PartialMessage<SyncResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.eliza.v1.SyncResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncResponse {
    return new SyncResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncResponse {
    return new SyncResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncResponse {
    return new SyncResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SyncResponse | PlainMessage<SyncResponse> | undefined, b: SyncResponse | PlainMessage<SyncResponse> | undefined): boolean {
    return proto3.util.equals(SyncResponse, a, b);
  }
}

