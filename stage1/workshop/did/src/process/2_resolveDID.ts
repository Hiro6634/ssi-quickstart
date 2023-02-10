import { DIDModenaResolver } from "@extrimian/did-resolver"
import { getModenaApiURL } from "../utils/modena.utils";


export const resolveDID = async (did: string) => {
    const resolver = new DIDModenaResolver({ modenaURL: getModenaApiURL() });
    console.log("Resolver:", resolver);
    return await resolver.resolveDID(did);
};