import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
const tutorialsEndpointPath     = import.meta.env.VITE_TUTORIALS_ENDPOINT_PATH;

export class PublishingApi extends BaseApi {
    #categoriesEndpoint;
    #tutorialsEndpoint;

    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
        this.#tutorialsEndpoint = new BaseEndpoint(this, tutorialsEndpointPath);
    }

    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    createCategory(resource) {
        return this.#categoriesEndpoint.create(resource);
    }

    updateCategory(resource) {
        return this.#categoriesEndpoint.update(resource.id, resource);
    }

    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }

    /**
     * Fetches all tutorials.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the tutorials' response.
     */
    getTutorials() {
        return this.#tutorialsEndpoint.getAll();
    }

    /**
     * Fetches a tutorial by its ID.
     * @param {number|string} id - The ID of the tutorial.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the tutorial response.
     */
    getTutorialById(id) {
        return this.#tutorialsEndpoint.getById(id);
    }

    /**
     * Creates a tutorial resource.
     * @param {Object} resource - Tutorial resource payload.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the created tutorial response.
     */
    createTutorial(resource) {
        return this.#tutorialsEndpoint.create(resource);
    }

    /**
     * Updates a tutorial resource.
     * @param {Object} resource - Tutorial resource payload (must include id).
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the updated tutorial response.
     */
    updateTutorial(resource) {
        return this.#tutorialsEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a tutorial by its ID.
     * @param {number|string} id - The ID of the tutorial to delete.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the delete response.
     */
    deleteTutorial(id) {
        return this.#tutorialsEndpoint.delete(id);
    }
}