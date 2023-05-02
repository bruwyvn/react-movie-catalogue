import { useState } from "react";

const RegisterForm = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    phone: "",
    address: "",
    plan: "Free",
  });

  const [cardData, setCardData] = useState({
    cardholderName: "",
    cardNumber: "",
    cvc: "",
  });

  const handlePersonalDataChange = (event) => {
    const { name, value } = event.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlanChange = (event) => {
    const { value } = event.target;
    setPersonalData((prevData) => ({
      ...prevData,
      plan: value,
    }));
  };

  const handleCardDataChange = (event) => {
    const { name, value } = event.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Personal Data:", personalData);
    console.log("Card Data:", cardData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="mb-4 text-2xl font-bold">Dados Pessoais</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={personalData.name}
          onChange={handlePersonalDataChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={personalData.phone}
          onChange={handlePersonalDataChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          value={personalData.address}
          onChange={handlePersonalDataChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="plan">Plano Escolhido</label>
        <select
          name="plan"
          id="plan"
          value={personalData.plan}
          onChange={handlePlanChange}
          required
        >
          <option value="Free">Free</option>
          <option value="Plus">Plus</option>
        </select>
      </div>
    </form>
  );
};

export default RegisterForm;
