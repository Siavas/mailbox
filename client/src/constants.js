export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};


export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    
    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
};

export const messageConstants = {
    SAVE_REQUEST: 'MESSAGE_SAVE_REQUEST',
    SAVE_SUCCESS: 'MESSAGE_SAVE_SUCCESS',
    SAVE_FAILURE: 'MESSAGE_SAVE_FAILURE',

    SENT_REQUEST: 'MESSAGE_SENT_REQUEST',
    SENT_SUCCESS: 'MESSAGE_SENT_SUCCESS',
    SENT_FAILURE: 'MESSAGE_SENT_FAILURE',

    GETBYID_REQUEST: 'MESSAGE_GETBYID_REQUEST',
    GETBYID_SUCCESS: 'MESSAGE_GETBYID_SUCCESS',
    GETBYID_FAILURE: 'MESSAGE_GETBYID_FAILURE',

    
    INBOX_REQUEST: 'MESSAGE_INBOX_REQUEST',
    INBOX_SUCCESS: 'MESSAGE_INBOX_SUCCESS',
    INBOX_FAILURE: 'MESSAGE_INBOX_FAILURE',

    DRAFT_REQUEST: 'MESSAGE_DRAFT_REQUEST',
    DRAFT_SUCCESS: 'MESSAGE_DRAFT_SUCCESS',
    DRAFT_FAILURE: 'MESSAGE_DRAFT_FAILURE',
}