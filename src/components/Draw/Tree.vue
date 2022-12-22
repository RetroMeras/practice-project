<script setup lang="ts">
import { storeToRefs } from "pinia";
import { watch, computed, onMounted } from "vue";
import { useMainStore } from "../../storage/main";
import { ICreator } from "../../types/ICreator";
import { IParticipant } from "../../types/IParticipant";
import { IResource } from "../../types/IResource";
import { ISupply } from "../../types/ISupply";
import { Tree } from "../../utils/draw/tree";
import {
  generate_creators_dict,
  generate_participants_dict,
  generate_resources_dict,
  generate_supplies_dicts,
} from "../../utils/dicts";

const find_children = (
  id: string,
  supplies_buyer_dict: { [key: string]: ISupply[] },
  resources_dict: { [key: string]: IResource },
  participants_dict: { [key: string]: IParticipant },
  creators_dict: { [key: string]: ICreator }
): any => {
  const creator = creators_dict[id];
  return {
    material: resources_dict[creator.resource].name,
    company: {
      name: participants_dict[creator.participant].name,
    },
    children: supplies_buyer_dict[id]
      ? supplies_buyer_dict[id].map((supply: ISupply) =>
          find_children(
            supply.seller,
            supplies_buyer_dict,
            resources_dict,
            participants_dict,
            creators_dict
          )
        )
      : [],
  };
};

const generate_tree = (
  resources: IResource[],
  participants: IParticipant[],
  supplies: ISupply[],
  creators: ICreator[]
) => {
  const creators_dict = generate_creators_dict(creators);
  const participants_dict = generate_participants_dict(participants);
  const resources_dict = generate_resources_dict(resources);
  const [supplies_seller_dict, supplies_buyer_dict] =
    generate_supplies_dicts(supplies);

  // Find creator that does not sell anything
  let root = supplies[0].buyer;
  while (supplies_seller_dict[root]) {
    root = supplies_seller_dict[root][0].buyer;
  }

  const tree = find_children(
    root,
    supplies_buyer_dict,
    resources_dict,
    participants_dict,
    creators_dict
  );

  return tree;
};

const store = useMainStore();
const { participants, resources, supplies, creators } = storeToRefs(store);

const create_tree = computed(() => () => {
  if (
    supplies.value.length > 0 &&
    creators.value.length > 0 &&
    resources.value.length > 0
  ) {
    const tree = generate_tree(
      resources.value,
      participants.value,
      supplies.value,
      creators.value
    );
    Tree("#treeContainer", tree, { dx: 30 });
  }
});

watch([participants, resources, supplies, creators], create_tree.value);
onMounted(create_tree.value);
</script>

<template>
  <svg id="treeContainer"></svg>
</template>
