// src/pages/ExpiringDomainsPage/ExpiringDomainsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import { ensContractAddress, ensABI } from '../../config/ensConfig';
import './ExpiringDomainsPage.css';

const ExpiringDomainsPage = () => {
  const { filter } = useParams();
  const [expiringDomains, setExpiringDomains] = useState([]);

  const fetchExpiringDomains = async (domains) => {
    const infuraUrl = 'https://mainnet.infura.io/v3/api';
const web3 = new Web3(infuraUrl);

    const ensRegistry = new web3.eth.Contract(ensABI, ensContractAddress);

    const expiringDomains = [];

    for (const domain of domains) {
      const namehash = Web3.utils.namehash(domain);
      const domainInfo = await ensRegistry.methods.records(namehash).call();
      const { expires } = domainInfo;

      const currentTime = Math.floor(Date.now() / 1000);
      const domainExpirationTime = parseInt(expires);

      // Check if the domain is expiring within the next 30 days
      if (domainExpirationTime - currentTime < 30 * 24 * 60 * 60) {
        expiringDomains.push({ domain, expirationTime: domainExpirationTime });
      }
    }

    return expiringDomains;
  };

  useEffect(() => {
    const fetchDomains = async () => {
      // Example list of domains to check
      const domainsToCheck = [
        'example1.eth',
        'example2.eth',
        'example3.eth',
      ];

      const expiringDomainsList = await fetchExpiringDomains(domainsToCheck);
      setExpiringDomains(expiringDomainsList);
    };

    fetchDomains();
  }, [filter]);

  return (
    <div className="expiring-domains-page">
      <h1>Expiring Domains</h1>
      <ul>
        {expiringDomains.map((domainInfo, index) => (
          <li key={index}>
            Domain: {domainInfo.domain} - Expiration Time: {new Date(domainInfo.expirationTime * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpiringDomainsPage;





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ExpiringDomainsPage.css';


// const ExpiringDomainsPage = () => {
//   const { filter } = useParams();
//   const [expiringDomains, setExpiringDomains] = useState([]);

//   useEffect(() => {
//     const fetchExpiringDomains = async () => {
//       // Fetch expiring domains using an API or ENS smart contract
//     };

//     fetchExpiringDomains();
//   }, [filter]);

//   return (
//     <div className="expiring-domains-page">
//       {/* Display the list of expiring domains */}
//     </div>
//   );
// };

// export default ExpiringDomainsPage;
