import { defineStore } from "pinia";
import { IParticipant, IParticipantSubmit } from "../types/IParticipant";
import { IResource } from "../types/IResource";
import { IUnit } from "../types/IValue";
import { ISupply } from "../types/ISupply";
import {
  getParticipants,
  postParticipant,
  putParticipant,
  deleteParticipant,
} from "./requests/participant";
import {
  getResources,
  postResource,
  putResource,
  deleteResource,
} from "./requests/resource";
import {
  getSupplies,
  postSupply,
  putSupply,
  deleteSupply,
} from "./requests/supply";
import { getUnits, postUnit, putUnit, deleteUnit } from "./requests/unit";
import { ICreator } from "../types/ICreator";
import { deleteCreator, getCreators, postCreator } from "./requests/creator";

export const API_URL = "http://localhost:3000";

const emptyParticipant = {
  id: "",
  name: "",
} as IParticipant;

const emptyResource = {
  id: "",
  name: "",
} as IResource;

const emptyUnit = {
  id: "",
  name: "",
  currency: false,
} as IUnit;

const emptySupply = {
  id: "",
  buyer: "",
  seller: "",
  resource: "",
  price: { value: 0, unit: "" },
  size: { value: 0, unit: "" },
} as ISupply;

const emptyCreator = {
  id: "",
  participant: "",
  resource: "",
} as ICreator

// https://pinia.vuejs.org/core-concepts/#option-stores
export const useMainStore = () => {
  const innerStore = defineStore("main", {
    state: () => ({
      participants: [] as IParticipant[],
      supplies: [] as ISupply[],
      units: [] as IUnit[],
      resources: [] as IResource[],
      creators: [] as ICreator[],
      __prefetch: false,
    }),
    getters: {
      emptyParticipant: () => ({ ...emptyParticipant }),
      emptyResource: () => ({ ...emptyResource }),
      emptySupply: () => ({ ...emptySupply }),
      emptyUnit: () => ({ ...emptyUnit }),
      emptyCreator: () => ({ ...emptyCreator }),
    },
    actions: {
      fetchParticipants: async function () {
        const data = await getParticipants();
        if (data) {
          this.participants = data;
        }
      },
      addParticipant: async function (participant: IParticipantSubmit) {
        await postParticipant(participant);
        await Promise.all([this.fetchParticipants(), this.fetchCreators()]);
      },
      editParticipant: async function (participant: IParticipant) {
        await putParticipant(participant);
        await this.fetchParticipants();
        await this.fetchCreators();
      },
      deleteParticipant: async function (id: string) {
        await deleteParticipant(id);
        await Promise.all([this.fetchParticipants(), this.fetchResources(), this.fetchCreators(), this.fetchSupplies()]);
      },
      fetchResources: async function () {
        const data = await getResources();
        if (data) {
          this.resources = data;
        }
      },
      addResource: async function (resource: IResource) {
        await postResource(resource);
        await this.fetchResources();
      },
      editResource: async function (resource: IResource) {
        await putResource(resource);
        await this.fetchResources();
      },
      deleteResource: async function (id: string) {
        await deleteResource(id);
        await Promise.all([this.fetchParticipants(), this.fetchResources(), this.fetchCreators(), this.fetchSupplies()]);
      },
      fetchSupplies: async function () {
        const data = await getSupplies();
        if (data) {
          this.supplies = data
        }
      },
      addSupply: async function (supply: ISupply) {
        await postSupply(supply);
        await this.fetchSupplies();
      },
      editSupply: async function (supply: ISupply) {
        await putSupply(supply);
        await this.fetchSupplies();
      },
      deleteSupply: async function (id: string) {
        await deleteSupply(id);
        await this.fetchSupplies();
      },
      fetchUnits: async function () {
        const data = await getUnits();
        if (data) {
          this.units = data;
        }
      },
      addUnit: async function (unit: IUnit) {
        await postUnit(unit);
        await this.fetchUnits();
      },
      editUnit: async function (unit: IUnit) {
        await putUnit(unit);
        await this.fetchUnits();
      },
      deleteUnit: async function (id: string) {
        await deleteUnit(id);
        await this.fetchUnits();
      },
      fetchCreators: async function () {
        const data = await getCreators();
        if (data) {
          this.creators = data;
        }
      },
      addCreator: async function (creator: ICreator) {
        await postCreator(creator);
        await this.fetchCreators();
      },
      deleteCreator: async function (id: string) {
        await deleteCreator(id);
        await this.fetchCreators();
      },
    },
  });
  const store = innerStore();

  if (!store.__prefetch) {
    Promise.all([
      store.fetchParticipants(),
      store.fetchResources(),
      store.fetchSupplies(),
      store.fetchUnits(),
      store.fetchCreators()
    ]);
    store.__prefetch = true;
  }

  return store;
};
