const axios = require('axios').default;

export const messages = {
    login:
        "Login as any user on this computer and another user on another computer.",
    create_session: "Creating a session...",
    connect: "Connecting...",
    connect_error:
        "Something went wrong with the connection. Check internet connection or user info and try again.",
    login_as: "Logged in as ",
    title_login: "Choose a user to login with:",
    title_callee: "Choose users to call:",
    calling: "Calling...",
    webrtc_not_avaible: "WebRTC is not available in your browser",
    no_internet: "Please check your Internet connection and try again",
    select_more_users: "Select at less one user to start Videocall",
    share_call_link: "Share the above url with the users you want to have a call with",
    prompt_user_name: "Input user name",
    confirm_cancel: "Do you sure to leave the call ?"
};

export const credentials = {
    appId: 4,
    authKey: "vGLcAyuxmwjQSrr",
    authSecret: "4bSxA2Nr8VUnD-W"
};

export const appConfig = {
    debug: {mode: 1}
};

export const users = [
    {
        "id": 680,
        "name": "Hazem Taha",
        "login": "user#1#local",
        "password": "user#1#local",
        "color": "#525733"
    },
    {
        "id": 681,
        "name": "Abdulmalick Dimnang",
        "login": "user#2#local",
        "password": "user#2#local",
        "color": "#691870"
    },
    {
        "id": 682,
        "name": "Rihab Badawi",
        "login": "user#3#local",
        "password": "user#3#local",
        "color": "#695643"
    },
    {
        "id": 683,
        "name": "Khalifa AlMannai",
        "login": "user#4#local",
        "password": "user#4#local",
        "color": "#991523"
    },
    {
        "id": 684, "name": "Hala Osm",
        "login": "user#6#local",
        "password": "user#6#local",
        "color": "#997177"
    },
    {
        "id": 685,
        "name": "Evergo",
        "login": "user#7#local",
        "password": "user#7#local",
        "color": "#854184"
    },
    {
        "id": 686,
        "name": "Abdulla AlMannai",
        "login": "user#8#local",
        "password": "user#8#local",
        "color": "#861806"
    },
    {
        "id": 687,
        "name": "Noora Jaber",
        "login": "user#9#local",
        "password": "user#9#local",
        "color": "#953615"
    },
    {
        "id": 688,
        "name": "Omar Faramawi",
        "login": "user#11#local",
        "password": "user#11#local",
        "color": "#459282"
    },{"id": 377, "name": "John", "color": "#43a70f", "login": "john", "password": "asdasdasd"}
];

export const GUEST_ROOM_ONLY_MODE = false

export const NO_ASNWER_TIMER = 30000 // 30 sec
