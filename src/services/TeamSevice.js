import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { REACT_APP_URL_SERVER } = process.env;
const url = REACT_APP_URL_SERVER;


const createTeam = (formData) => {
    return axios
        .post(url + "/api/teams/createteam", formData)
        .then((response) => {
            return response.data;
        });
}

const getTeamsByTeamId = (teamId) => {
    return axios
        .get(url + "/api/teams/" + teamId,)
        .then((response) => {
            return response.data;
        });
}

const UpdateTeamsByTeamId = (teamId, formData) => {
    return axios
        .put(url + "/api/teams/" + teamId, formData)
        .then((response) => {
            return response.data;
        });
}

const getTeamsByUserId = (userId) => {
    return axios
        .get(url + "/api/teams/user/" + userId,)
        .then((response) => {
            return response.data;
        });
}

const createTeamMember = (formData) => {
    return axios
        .post(url + "/api/TeamMember", formData)
        .then((response) => {
            return response.data;
        });
}

const getPlayerByTeamId = (TournamentId) => {
    return axios
        .get(url + `/api/teams/${TournamentId}/activeplayers`)
        .then((response) => {
            return response.data;
        });
}
const createLineup = () => {
    return axios
        .get(url + `/lineups`)
        .then((response) => {
            return response.data;
        });
}
export { createTeam, getTeamsByTeamId, UpdateTeamsByTeamId, getTeamsByUserId, createTeamMember, getPlayerByTeamId, createLineup };