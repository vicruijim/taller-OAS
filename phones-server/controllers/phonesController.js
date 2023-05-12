import * as service from '../services/phonesService.js';

export function getPhones(req, res) {
    service.getPhones(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

