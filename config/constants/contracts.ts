
export const ContractAddresses = () => {
    const univac :{[key: number]: any } = {
      80001: "0x226Fbf87BCbA355939b0bc8a1f8600E829F51247",
      97: "0xbbcd6FaF24A65E82F0938E134d1119fE52390784",
    }
    const evermoontoken:{[key: number]: any } ={
      80001: "0x575Ef83cD54e1E44D8c2000C7F34f387F167DaC6",
      97: "0x5aaA11822988ba9fA7beD936A55A1B7fe93ce81d",
    } 
    const lptoken:{[key: number]: any } = {
       80001: "0x417eA0Eb4c939B12e3d989f4D072ae7d7E282947",
       97: "0x586F8C88feaa2e07Aa375636D052559c3CeE30a1",
    }
    const sacredbeast:{[key: number]: any } = {
      80001: "0xF0d18bEd75AD549F2d42987BeeEC051B710BadbE",
      97: "0x52408C7f6Ae2010fb918D6daAbE7D28A6D4C58E0",
   }
   const evermoonstaker:{[key: number]: any } = {
    80001: "",
    97: "0x43eE7681d5b4a63f559f8C8c184EF945A3Eb6a65",
 }
    return {univac,evermoontoken,lptoken,sacredbeast,evermoonstaker}
}