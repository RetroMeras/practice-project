import { defineStore } from "pinia";
import { IParticipant } from "../types/IParticipant";
import { IResource } from "../types/IResource";
import { IValue, IUnit } from "../types/IValue";
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

export const API_URL = "http://localhost:3000";

const emptyParticipant = {
  id: "",
  name: "",
} as IParticipant;

const emptyResource = {
  id: "",
  name: "",
} as IResource;

const emptySupply = {
  id: "",
  buyer: "",
  seller: "",
  resource: "",
  price: { value: 0, unit: "" },
  size: { value: 0, unit: "" },
} as ISupply;

// https://pinia.vuejs.org/core-concepts/#option-stores
export const useMainStore = () => {
  const innerStore = defineStore("main", {
    state: () => ({
      participants: [] as IParticipant[],
      supplies: [] as ISupply[],
      units: [] as IUnit[],
      resources: [] as IResource[],
      __prefetch: false,
    }),
    getters: {
      emptyParticipant: () => ({ ...emptyParticipant }),
      emptyResource: () => ({ ...emptyResource }),
      emptySupply: () => ({ ...emptySupply }),
    },
    actions: {
      fetchParticipants: async function () {
        const data = await getParticipants();
        if (data) {
          this.participants = data;
        }
      },
      addParticipant: async function (participant: IParticipant) {
        await postParticipant(participant);
        await this.fetchParticipants();
      },
      editParticipant: async function (participant: IParticipant) {
        await putParticipant(participant);
        await this.fetchParticipants();
      },
      deleteParticipant: async function (id: string) {
        await deleteParticipant(id);
        await Promise.all([this.fetchParticipants(), this.fetchResources()]);
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
        await this.fetchResources();
      },
      fetchSupplies: async function () {
        const data = await getSupplies();
        if (data) {
          this.supplies = data;
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
        await this.fetchSupplies();
      },
      editUnit: async function (unit: IUnit) {
        await putUnit(unit);
        await this.fetchSupplies();
      },
      deleteUnit: async function (id: string) {
        await deleteUnit(id);
        await this.fetchSupplies();
      },
    },
  });
  const store = innerStore();

  if (!store.__prefetch) {
    store.fetchParticipants();
    store.fetchResources();
    store.__prefetch = true;
  }

  return store;
};
