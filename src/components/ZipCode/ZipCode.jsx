import React, { useState, useEffect } from 'react';
import shippingIcon from '/shipping_icon.svg'
import { setDataToStorage, getStoredData} from '../../utils/storage';

function ZipCode() {
  const storedData = getStoredData('zipData')?.item
  const [zip, setZip] = useState(storedData?.cep || '');
  const [address, setAddress] = useState('');



  useEffect(() => {
    const fetchAddress = async () => {
      const cleanZip = zip.replace('-', '');
      if (cleanZip.length !== 8){
        setAddress('');
        return
      }
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanZip}/json/`);
        const data = await res.json();

        if (data.erro) {
          setAddress('CEP não encontrado');
          return
        }
        const zipData = storedData || data

        setAddress(`${zipData.logradouro}, ${zipData.bairro} - ${zipData.localidade}/${zipData.uf}`);
        setDataToStorage('zipData', data);

      } catch (error) {
        setAddress('Erro ao buscar o endereço');
      }

    };

    fetchAddress();
  }, [zip]);

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
    }
    setZip(value);
  };

  return (
    <section className="p-4 flex-col border-t-2 border-[#f5f5f5] mt-8 px-0 lg:w-[30vw]">
      <div className="w-full max-w-sm flex items-center justify-left gap-4 mb-4">
        <label htmlFor="zip" className="block mb-1 font-thin">CEP</label>
        <input
          id="zip"
          type="text"
          value={zip}
          onChange={handleChange}
          maxLength={9}
          placeholder="12345-678"
          className="border border-gray-100 p-2 rounded w-32  flex"
        />
      </div>

      {address && (
        <div className="text-sm text-[#000] bg-[#F5F5F5] p-3 w-[314px] lg:w-[30vw] font-thin flex gap-4 items-center">
          <img className="w-6 h-6" src={shippingIcon} alt="shipping" /> {address}
        </div>
      )}


    </section>
  );
}

export default ZipCode;
