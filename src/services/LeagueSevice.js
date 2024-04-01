import axios from "axios";
import { useEffect } from "react";

const { REACT_APP_URL_SERVER } = process.env;
const url = REACT_APP_URL_SERVER;

// LeagueName, Phone, Open_Or_Not, Location, ImageAvatar, FilePDF
const createLeague = (formData) => {
    return axios
        .post(url + "/api/League/createInformation", formData)
        .then((response) => {
            return response.data;
        });
}

const createConfigTournament = (TournamentId, competitionFormatName, NumberOfTeams, NumberOfPlayersPerTeamRange, NumberOfMatches, NumberOfRounds,
    NumberOfTables, NumberOfTeamsToNextRound, RegistrationAllowed, WinPoints, DrawPoints, LossPoints) => {
    return axios
        .post(url + "/api/League", {
            TournamentId,
            competitionFormatName,
            NumberOfTeams,
            NumberOfPlayersPerTeamRange,
            NumberOfMatches,
            NumberOfRounds,
            NumberOfTables,
            NumberOfTeamsToNextRound,
            RegistrationAllowed,
            WinPoints,
            DrawPoints,
            LossPoints
        })
        .then((response) => {
            return response.data;
        });
}

const getLeaguesByOrganizerId = (organizerId) => {
    return axios
        .get(url + "/api/League/getLeagues/" + organizerId,)
        .then((response) => {
            return response.data;
        });
}

const getPublicLeagues = () => {
    return axios
        .get(url + "/api/League/publicLeagues",)
        .then((response) => {
            return response.data;
        });
}

const getLeaguesContainText = (searchText) => {
    return axios
        .get(url + "/api/League/search?searchText=" + searchText,)
        .then((response) => {
            return response.data;
        });
}
const getLeaguesByType = (tournamentTypeId) => {
    return axios
        .get(url + "/api/League/getTournamentsByType/" + tournamentTypeId,)
        .then((response) => {
            return response.data;
        });
}


//League statitics
const getLeaguesStatisticByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}
const getMatchWithMostCardsByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/MatchWithMostCards/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const getMatchWithMostGoalsByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/GetMatchWithMostGoals/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const getTeamWithMostGoalsByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/GetTeamWithMostGoals/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}
const getTeamWithMostCardByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/GetTeamWithMostCard/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const getPlayerWithMostGoalsByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/GetPlayerWithMostGoals/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const getPlayerWithMostCardByTournamentId = (tournamentId) => {
    return axios
        .get(url + "/api/LeagueStatistics/GetPlayerWithMostCards/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const getLeagueDetailByIdLeague = (tournamentId) => {
    return axios
        .get(url + "/api/League/getTournamentDetails/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const addNewSponsor = (tournamentId, formData) => {
    return axios
        .post(url + "/api/Sponsor?tournamentId=" + tournamentId, formData)
        .then((response) => {
            return response.data;
        });
}

const getSponsorByLeagueId = (tournamentId) => {
    return axios
        .get(url + "/api/Sponsor/GetAllSponsors/" + tournamentId,)
        .then((response) => {
            return response.data;
        });
}

const getSponsorByLeagueIdAndId = (id, tournamentId) => {
    return axios
        .get(url + `/api/Sponsor/${id}/${tournamentId}`,)
        .then((response) => {
            return response.data;
        });
}
const updateSponsorByLeagueIdAndId = (id, tournamentId, formData) => {
    return axios
        .put(url + `/api/Sponsor/${id}/${tournamentId}`, formData)
        .then((response) => {
            return response.data;
        });
}

const deleteSponsorByLeagueIdAndId = (id, tournamentId,) => {
    return axios
        .delete(url + `/api/Sponsor/${id}/${tournamentId}`)
        .then((response) => {
            return response.data;
        });
}

export {
    createLeague, createConfigTournament, getLeaguesByOrganizerId, getPublicLeagues, getLeaguesContainText, getLeaguesByType,
    getLeaguesStatisticByTournamentId,
    getMatchWithMostCardsByTournamentId,
    getMatchWithMostGoalsByTournamentId,
    getTeamWithMostGoalsByTournamentId,
    getTeamWithMostCardByTournamentId,
    getPlayerWithMostGoalsByTournamentId,
    getPlayerWithMostCardByTournamentId,
    getLeagueDetailByIdLeague
    , addNewSponsor,
    getSponsorByLeagueId,
    getSponsorByLeagueIdAndId,
    updateSponsorByLeagueIdAndId,
    deleteSponsorByLeagueIdAndId
};