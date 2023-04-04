import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
//import { ensContractAddress, ensABI } from '../../config/ensConfig';
import './SearchResultPage.css';
// src/pages/SearchResultPage/SearchResultPage.js
import { ensPublicResolverContractAddress, ensPublicResolverABI } from '../../config/ensConfig';


const SearchResultPage = () => {
    const { domain } = useParams();
    const [domainInfo, setDomainInfo] = useState(null);
  
    useEffect(() => {
      const fetchDomainInfo = async () => {
        const infuraUrl = 'https://mainnet.infura.io/v3/api';
const web3 = new Web3(infuraUrl);

        const ensPublicResolver = new web3.eth.Contract(ensPublicResolverABI, ensPublicResolverContractAddress);
  
        // Fetch domain information using ENS Public Resolver smart contract
        const node = Web3.utils.sha3(domain);
        const addr = await ensPublicResolver.methods.addr(node).call();
        const name = await ensPublicResolver.methods.name(node).call();
  
        setDomainInfo({ addr, name });
      };
  
      fetchDomainInfo();
    }, [domain]);
  
    // Rest of the component
    return (
        <div className="search-result-page">
         {domainInfo ? (
            <div>
              <p>Address: {domainInfo.addr}</p>
              <p>Name: {domainInfo.name}</p>
              </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    };
    
    export default SearchResultPage;



// const SearchResultPage = () => {
//   const { domain } = useParams();
//   const [domainInfo, setDomainInfo] = useState(null);

//   useEffect(() => {
//     const fetchDomainInfo = async () => {
//       const web3 = new Web3(Web3.givenProvider);
//       const ens = new web3.eth.Contract(ensABI, ensContractAddress);

//       Fetch domain information using ENS smart contract
//       const node = Web3.utils.sha3(domain);
//       const addr = await ens.methods.addr(node).call();
//       const name = await ens.methods.name(node).call();

//       setDomainInfo({ addr, name });
//     };

//     fetchDomainInfo();
//   }, [domain]);

//   return (
//     <div className="search-result-page">
//      {domainInfo ? (
//         <div>
//           <p>Address: {domainInfo.addr}</p>
//           <p>Name: {domainInfo.name}</p>
//           </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default SearchResultPage;
