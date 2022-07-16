export const ApiEndpoint = () => {
    const U :{[key: number]: any } = {
      80001: "https://api.thegraph.com/subgraphs/name/noxapi/farm-thegraph-mumbai",
      97: "https://api.thegraph.com/subgraphs/name/nronahp/univac",
    }
    const staker :{[key: number]: any } = {
      80001: "",
      97: " ",
    }
    const sacredbeast :{[key: number]: any } = {
      80001: "https://api.thegraph.com/subgraphs/name/noxapi/scbv2mum",
      97: "https://api.thegraph.com/subgraphs/name/noxapi/scbv2chapel",
    }
    return {U,sacredbeast,staker}
}