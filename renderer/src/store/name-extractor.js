import {thayyib} from "@/utils"
export default {
    state : {
        file: {
            name: "",
            realname: "",
            type: "",
            path: ""
        },
        passages:[],
        detectedNames: []
    },
    getters:{
        passages: (state) => {
            return state.passages//.join("\n")
          }
    },
    mutations : {
        changeFile(state, event) {
            const selectedFile = event.target.files[0];

            state.file.name = selectedFile.name;
            state.file.realname = selectedFile.name;
            state.file.type = selectedFile.type;
            state.file.path = selectedFile.path;
        },
        deleteDetectedName(state, indexToDelete) {
            state.detectedNames = state
                .detectedNames
                .filter((name, index) => index != indexToDelete)
        }
    },
    actions : {
        extract({state}) {
            thayyib("name-extractor", state.file).then(payload => state.detectedNames = payload.data.map(name => {
                return {label: name, processed: false};
            }))
        },
        findPassage({state}, name) {
            thayyib("find-passage", {name}).then(payload => {
                //console.log(payload.data.toString())
                state.passages = payload.data;
            })

        }
    }
}
