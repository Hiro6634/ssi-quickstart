"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLongDID = void 0;
const kms_client_1 = require("@extrimian/kms-client");
const kms_core_1 = require("@extrimian/kms-core");
const secure_storage_1 = require("../models/secure-storage");
const createLongDID = () => __awaiter(void 0, void 0, void 0, function* () {
    const kms = new kms_client_1.KMSClient({
        lang: kms_core_1.LANG.es,
        storage: new secure_storage_1.SecureStorage()
    });
    // const updateKey = await kms.create(Suite.ES256k);
    // const recoveryKey = await kms.create(Suite.ES256k);
    // const didComm = await kms.create(Suite.DIDComm);
    // const bbsbls = await kms.create(Suite.Bbsbls2020);
    // const didService = new Did();
    // const longDID = await didService.createDID({
    //     updateKeys: [updateKey.publicKeyJWK],
    //     recoveryKeys: [recoveryKey.publicKeyJWK],
    //     verificationMethods: [{
    //         id: "bbsbls",
    //         type: "Bls12381G1Key2020",
    //         publicKeyJwk: bbsbls.publicKeyJWK,
    //         purpose: [new AssertionMethodPurpose()]
    //     },
    //     {
    //         id: "didComm",
    //         type: "X25519KeyAgreementKey2019",
    //         publicKeyJwk: didComm.publicKeyJWK,
    //         purpose: [new KeyAgreementPurpose()]
    //     }],
    // })
    // console.log("LongDID:",longDID);
    // return longDID;
    return null;
});
exports.createLongDID = createLongDID;
