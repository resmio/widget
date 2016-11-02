import { CALL_API, Schemas } from '../middleware/api'

export const FACILITY_REQUEST = 'FACILITY_REQUEST'
export const FACILITY_SUCCESS = 'FACILITY_SUCCESS'
export const FACILITY_FAILURE = 'FACILITY_FAILURE'

// Fetches a facility info from the resmio API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchFacilityInfo = login => ({
  [CALL_API]: {
    types: [ FACILITY_REQUEST, FACILITY_SUCCESS, FACILITY_FAILURE ],
    endpoint: `facility/${facilityId}`,
    schema: Schemas.FACILITY
  }
})
