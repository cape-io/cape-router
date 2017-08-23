import { partial } from 'lodash'
import { flow, get } from 'lodash/fp'
import { createSelector } from 'reselect'
import { getProps, select } from 'cape-select'
import { selectActive } from 'redux-history-sync'
import { routeInfoSelector, selectRoutes } from 'location-info'

export const routeParams = flow(getProps, get('params'))
export const routeParam = partial(select, routeParams)

// Pass in the state object and return some info about a "route".
// selectActiveKeyDefault() is a helper function to grab the current location info.
export const routingSelector = createSelector(
  selectRoutes,
  flow(get('history'), selectActive),
  routeInfoSelector
)
export const getRoute = select(routingSelector, 'route')
export const getRouteId = select(getRoute, 'id')

export default routingSelector
