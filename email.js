class FormSubmit {
    constructor(config) {
        this.config = config;
        this.form = document.querySelector(config.form);
        this.formButton = document.querySelector(config.button);

        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.enviarForm = this.enviarForm.bind(this);
    }

    mostrarSucesso() {
        this.form.innerHTML = this.config.sucess;
    }

    mostrarErro() {
        this.form.innerHTML = this.config.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    async enviarForm(event) {
        try {
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.mostrarSucesso();
        } catch {
            this.mostrarErro();
            throw new Error(error);
        }
    }

    onSubmition(e) {
        e.preventDefault();
    }

    init() {
        if (this.form) {
            this.formButton.addEventListener("click"), this.enviarForm();
        }
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    sucess: "<h2> Mensagem enviada! </h2>",
    error: "<h2> Não foi possível enviar sua mensagem. </h2>"
});