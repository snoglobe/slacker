// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SyncRequest, SyncResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export const ElizaService = {
  typeName: "connectrpc.eliza.v1.ElizaService",
  methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.ElizaService.SyncSlackMessages
     */
    syncSlackMessages: {
      name: "SyncSlackMessages",
      I: SyncRequest,
      O: SyncResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

