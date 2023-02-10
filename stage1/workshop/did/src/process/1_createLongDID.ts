import { KMSClient } from "@extrimian/kms-client";
import { Did } from "@extrimian/did-registry";
import { AssertionMethodPurpose, DIDDocument, KeyAgreementPurpose } from "@extrimian/did-core";
import { LANG, Suite } from "@extrimian/kms-core";
import { SecureStorage } from "../models/secure-storage";

const resolveDID = async(did: string): Promise<any> {
    const resolverURL = "";
    const didIdentifier = did.slice(did.lastIndexOf(':')+1);
    const {data: didDocument} = await axios.get(resolverURL + didIdentifier);
}
export const createLongDID = async () => {
    const kms = new KMSClient({
        lang: LANG.es,
        storage: new SecureStorage(),
        didResolver: (did: string) => Promise<DIDDocument>
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
};