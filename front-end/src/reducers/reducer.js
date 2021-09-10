import randId from "../utils/randomIdGen";
import {
	REGISTER_USER,
	SET_CURRENT_USER,
	UPDATE_CURRENT_USER,
	ADD_NEW_CLASS,
	UPDATE_CLASS,
	DELETE_CLASS,
	REGISTER_FOR_CLASS,
	UNREGISTER,
	SET_IS_FETCHING,
	SET_CLASSES,
	SET_USERS,
	SET_CLIENT_LIST,
	SET_CLIENT_CLASSES,
} from "../actions/actions.js";

const initialState = {
	isFetching: false,
	users: [],
	classes: [],
	clientClasses: [],
	clientList: [],
	currentUser: {
		role: "",
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				users: [
					...state.users,
					{
						first_name: action.payload.first_name,
						last_name: action.payload.last_name,
						email: action.payload.email,
						username: action.payload.username,
						password: action.payload.password,
						auth_key: action.payload.auth_key,
						role: action.payload.role,
						id: randId(),
						classes: [],
					},
				],
			};
		case SET_CURRENT_USER:
			return {
				...state,
				// currentUser: action.payload,
				currentUser: state.users.find(
					(cur) =>
						cur.username === action.payload.username &&
						cur.password === action.payload.password
				),
			};
		case UPDATE_CURRENT_USER:
			return {
				...state,
				currentUser: state.users.find((cur) => cur.id === state.currentUser.id),
			};
		case ADD_NEW_CLASS:
			return {
				...state,
				classes: [...state.classes, action.payload],
				users: state.users.map((cur) => {
					if (cur.id === action.payload.instructor_id) {
						return { ...cur, classes: [...cur.classes, action.payload] };
					} else {
						return cur;
					}
				}),
			};
		case UPDATE_CLASS:
			return {
				...state,
				classes: state.classes.map((cur) => {
					if (cur.id === action.payload.id) {
						return action.payload;
					} else {
						return cur;
					}
				}),
				users: state.users.map((cur) => {
					if (cur.id === action.payload.instructor_id) {
						return {
							...cur,
							classes: cur.classes.map((class_) => {
								if (class_.id === action.payload.id) {
									return action.payload;
								} else {
									return class_;
								}
							}),
						};
					} else {
						return cur;
					}
				}),
			};
		case DELETE_CLASS:
			return {
				...state,
				classes: state.classes.filter(
					(_class) => _class.id !== action.payload.id
				),
				users: state.users.map((user) => {
					if (user.id === action.payload.instructor_id) {
						return {
							...user,
							classes: user.classes.filter(
								(_class) => _class.id !== action.payload.id
							),
						};
					} else {
						return user;
					}
				}),
			};
		case REGISTER_FOR_CLASS:
			return {
				...state,
				currentUser: {
					...state.currentUser,
					classes: [...state.currentUser.classes, action.payload],
				},
				users: state.users.map((user) => {
					if (user.id === state.currentUser.id) {
						return {
							...state.currentUser,
							classes: [...state.currentUser.classes, action.payload],
						};
					} else {
						return user;
					}
				}),
			};
		case UNREGISTER:
			return {
				...state,
				currentUser: {
					...state.currentUser,
					classes: state.currentUser.classes.filter((_class) => {
						return _class.id !== action.payload.id;
					}),
				},
				users: state.users.map((user) => {
					if (user.id === state.currentUser.id) {
						return {
							...state.currentUser,
							classes: state.currentUser.classes.filter((_class) => {
								return _class.id !== action.payload.id;
							}),
						};
					} else {
						return user;
					}
				}),
			};
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.payload,
			};
		case SET_CLASSES:
			return {
				...state,
				classes: action.payload,
			};
		case SET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_CLIENT_LIST:
			return {
				...state,
				clientList: action.payload,
			};
		case SET_CLIENT_CLASSES:
			return {
				...state,
				clientClasses: action.payload,
			};
		default:
			return state;
	}
};
