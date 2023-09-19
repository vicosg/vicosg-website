import * as React from "react";
import { useState } from "react";

const TypeformContact = (props) => {
  const { contactContent } = props;

  const [step, setStep] = useState(0);
  const [stepsData, setStepsData] = useState([
    { id: "name", type: "text", question: contactContent.data.name_question, value: "", completed: false },
    { id: "lastname", type: "text", question: contactContent.data.lastname_question, value: "", completed: false },
    { id: "email", type: "email", question: contactContent.data.email_question, value: "", completed: false },
    { id: "phone", type: "tel", question: contactContent.data.telephone_question, value: "", completed: false },
  ]);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
    checkboxApproved: false,
  });

  const handleResponse = (status, msg) => {
    console.log(msg)
    if (status === 200) {
      console.log(msg);
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
        checkboxApproved: false,
      });
      setStepsData((prevData) =>
        prevData.map((stepData) => ({ ...stepData, value: "", completed: false }))
      );
      setStep(0);
    } else {
      console.log("ERROR");
      console.log(msg);
      setStatus({
        info: { error: true, msg: msg },
        checkboxApproved: false,
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    const { id, value } = e.target;
    setStepsData((prevData) =>
      prevData.map((stepData) =>
        stepData.id === id ? { ...stepData, value: value, completed: value.trim() !== "" } : stepData
      )
    );
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleCheckboxChange = (e) => {
    const checkboxValue = e.target.checked;
    setStatus((prevStatus) => ({
      ...prevStatus,
      checkboxApproved: checkboxValue,
    }));
  };

  const handleNextStep = () => {
    if (stepsData[step].completed && step < stepsData.length - 1) {
      setStep(step + 1);
    }
  };

  const handleFinalSubmit = async () => {
    if (!status.checkboxApproved) {
      return;
    }

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stepsData.map((stepData) => stepData.value)),
    });
    console.log(res)
    const awaitedStatus = res.status;
    const text = await res.text();
    handleResponse(awaitedStatus, text);
  };

  return (
    <div className="bg-black bg-opacity-60 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-30 p-6 rounded-lg xl:w-1/2 shadow-lg">
        <div className="mb-4 text-center">
          <p className="text-2xl font-bold">
            {stepsData[step].question}
          </p>
        </div>
        <div className="mb-4">
          <input
            onChange={handleOnChange}
            value={stepsData[step].value}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={stepsData[step].id}
            type={stepsData[step].type}
            placeholder={stepsData[step].question}
          />
        </div>
        {step === stepsData.length - 1 && (
          <div className="mb-4 text-left">
            <label className="block text-black text-sm mb-2">
              <div className="flex flex-row">
                <div>
                  <input
                    type="checkbox"
                    checked={status.checkboxApproved}
                    onChange={handleCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white ml-2 text-justify">
                    {contactContent.data.agree_text}
                </div>
              </div>
            </label>
          </div>
        )}
        <div className="flex justify-between">
          {step > 0 && (
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setStep(step - 1)}
            >
              {contactContent.data.previous_button_text}
            </button>
          )}
          {step < stepsData.length - 1 && (
            <button
              className={`${
                stepsData[step].completed
                  ? "bg-[#ffb300] hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  : "bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed"
              }`}
              onClick={handleNextStep}
              disabled={!stepsData[step].completed}
            >
              {contactContent.data.next_button_text}
            </button>
          )}
          {step === stepsData.length - 1 && (
            <button
              className={`${
                status.checkboxApproved
                  ? "bg-[#ffb300] hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  : "bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed"
              }`}
              onClick={handleFinalSubmit}
              disabled={!status.checkboxApproved}
            >
              {contactContent.data.submit_button_text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeformContact;
