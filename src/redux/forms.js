export const initialContactState = {
    contactEmail: '',
    contactName: '',
    contactMessage: '',
    updates: false,
    touched: {
        contactEmail: false,
        contactName: false,
        contactMessage: false
    }
};

export const initialRegisterState = {
    registerEmail: '',
    registerPassword: '',
    touched: {
        registerEmail: false,
        registerPassword: false,
    }
};

export const initialLoginState = {
    loginName: '',
    loginEmail: '',
    loginPassword: '',
    loginPassword1: '',
    touched: {
        loginName: false,
        loginEmail: false,
        loginPassword: false,
        loginPassword1: false,
    }
};