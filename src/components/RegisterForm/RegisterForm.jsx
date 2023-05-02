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
      <h1 className="text-2xl font-bold mb-4">Dados do Cartão</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="cardholderName">Nome no Cartão</label>
        <input
          type="text"
          name="cardholderName"
          id="cardholderName"
          value={cardData.cardholderName}
          onChange={handleCardDataChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cardNumber">Número do Cartão</label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          value={cardData.cardNumber}
          onChange={handleCardDataChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cvc">CVC</label>
        <input
          type="password"
          name="cvc"
          id="cvc"
          value={cardData.cvc}
          onChange={handleCardDataChange}
          required
        />
      </div>
      <button type="submit">Assinar</button>
    </form>
  );
};

export default RegisterForm;
