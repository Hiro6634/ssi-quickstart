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
exports.index = void 0;
const _1_createLongDID_1 = require("./process/1_createLongDID");
const index = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, _1_createLongDID_1.createLongDID)();
    // let didDocument = await resolveDID(result.didUniqueSuffix);
    // console.log("DID Document:",didDocument);
    // const publicDID = await publishDID(result);
    // console.log(publicDID);
    // const resolvePromise = new Promise<DIDDocument>(async (resolve, reject) => {
    //     setTimeout(async () => {
    //         didDocument = await resolveDID(publicDID.canonicalId);
    //         resolve(didDocument);
    //     }, 180000);
    // });
    // didDocument = await resolvePromise;
    // console.log(didDocument);
});
exports.index = index;
(0, exports.index)();
// DID con bbs y didcomm
//did:modena:matic:EiCyn4cqgkM8776g85kPC9eQ9N6EaRIJMARVUUvBttSVUA
