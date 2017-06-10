const actions = {
    create:'Create',
    update: 'Update',
    remove: 'Remove',
    find: 'Find',
    findAll: 'Find All'
}
const models = {
    property: {
        name: 'Property',
        endpoint: 'properties',
        useCustomRoutes: true
    },
    user: {
        name: 'User',
        endpoint: 'users',
        useCustomRoutes: true,
        preventDefaultApi: true
    }
}
export {
    actions,
    models
}