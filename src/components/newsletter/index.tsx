import React, { useState } from "react";
import { NewsLetter } from "./style";
import Swal from "sweetalert2";
import NewsLetterService from "./../../service/newsletter.service";
import { isEmailValid, isNameValid } from "./../../utils/validations";

const Newsletter = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleNameChange = (e: any) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const sendContact = async (e: any) => {
        e.preventDefault();

        try {
            await NewsLetterService.SendContact({ email, name });

            Swal.fire({
                title: "Obrigado!",
                text: "Informações enviadas com sucesso.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            console.log(error);

            Swal.fire({
                title: "Erro",
                text: "Ocorreu um erro durante o envio das suas informações. Tente novamente mais tarde!",
                icon: "error",
                confirmButtonText: "Entendi!",
            });
        }
    };

    return (
        <NewsLetter>
            <div className="newsContainer">
                <h2>Participe de nossas news com promoções e novidades!</h2>
                <form className="newsContainer__form" onSubmit={sendContact}>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={handleNameChange}
                    />
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        onChange={handleEmailChange}
                    />
                    <button
                        className="newsContainer__form--button"
                        disabled={!isEmailValid(email) || !isNameValid(name)}
                    >
                        Eu quero!
                    </button>
                </form>
            </div>
        </NewsLetter>
    );
};

export default Newsletter;
