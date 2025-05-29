(function() {
    try{

        if( document.readyState == "complete" ){
            onloadActions_881255();
        }  else {
            window.addEventListener('load', function (){
                onloadActions_881255();
            }, false);
        }

        function onloadActions_881255(){
            constructDiv_881255();

        }

        function constructDiv_881255(){
            var iframeDiv = document.createElement("div");
            iframeDiv.setAttribute('id','Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255');
            iframeDiv.setAttribute('class','zf_main_id_881255');

            var closeFormDiv = document.createElement("div");
            closeFormDiv.setAttribute('id','deleteform_881255');
            closeFormDiv.setAttribute('class','zf_lb_closeform_881255');


            var containerDiv = document.createElement("div");
            containerDiv.setAttribute('id','containerDiv_881255');
            containerDiv.setAttribute('class','zf_lB_Container_881255 ');
            containerDiv.appendChild(iframeDiv);
            containerDiv.appendChild(closeFormDiv);

            var wrapperDiv = document.createElement("div");
            wrapperDiv.setAttribute('class','zf_lB_Wrapper_881255');
            wrapperDiv.appendChild(containerDiv);


            var dimmerDiv = document.createElement("div");
            dimmerDiv.setAttribute('class','zf_lB_Dimmer_881255');
            dimmerDiv.setAttribute('elname','popup_box');

            var mainDiv = document.createElement("div");
            mainDiv.setAttribute('id','formsLightBox_881255');
            mainDiv.style.display = "none";
            mainDiv.appendChild(wrapperDiv);
            mainDiv.appendChild(dimmerDiv);

            document.body.appendChild(mainDiv);

        }

        function showZForm_881255(){
            console.log("Hello")
            var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
            if(iframe == undefined ||iframe.length == 0){
                loadZForm_881255();

            }
            document.getElementById("formsLightBox_881255").style.display = "block";
            document.body.style.overflow = "hidden";
        }

        function loadZForm_881255() {
            var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
            if(iframe == undefined ||iframe.length == 0){
                var f = document.createElement("iframe");
                f.src = getsrcurlZForm_881255('https://forms.zohopublic.com/panopticongroup1/form/RockoffContact/formperma/Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg?zf_rszfm=1');

                f.style.border="none";
                f.style.minWidth="100%";
                f.style.overflow="hidden";
                var d = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255");
                d.appendChild(f);

                var deleteForm = document.getElementById("deleteform_881255");
                deleteForm.onclick = function deleteZForm_881255() {
                    var divCont = document.getElementById("formsLightBox_881255");
                    divCont.style.display="none";
                    document.body.style.overflow = "";

                    var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
                    iframe.remove();
                }



                window.addEventListener('message', function (){
                    var evntData = event.data;
                    if( evntData && evntData.constructor == String ){
                        var zf_ifrm_data = evntData.split("|");
                        if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                            var zf_perma = zf_ifrm_data[0];
                            var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                            var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
                            if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                                var prevIframeHeight = iframe.style.height;

                                var zf_tout = false;
                                if( zf_ifrm_data.length == 3 ) {
                                    iframe.scrollIntoView();
                                    zf_tout = true;
                                }

                                if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                                    if( zf_tout ) {
                                        setTimeout(function(){
                                            iframe.style.minHeight = zf_ifrm_ht_nw;
                                            var containerDiv = document.getElementById("containerDiv_881255");
                                            containerDiv.style.height=zf_ifrm_ht_nw;
                                        },500);
                                    } else {
                                        iframe.style.minHeight = zf_ifrm_ht_nw;
                                        var containerDiv = document.getElementById("containerDiv_881255");
                                        containerDiv.style.height=zf_ifrm_ht_nw;
                                    }
                                }
                            }
                        }
                    }

                }, false);
            }
        }



        function getsrcurlZForm_881255(zf_src) {
            try {

                if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
                    for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                        var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                        var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                        if ( typeof utmVal !== "undefined" ) {
                            if ( utmVal != "" ){
                                if(zf_src.indexOf('?') > 0){
                                    zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
                                }else{
                                    zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
                                }
                            }
                        }
                    }
                }

                if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
                    for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                        var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                        var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                        if ( typeof utmVal !== "undefined" ) {
                            if ( utmVal != "" ){
                                if(zf_src.indexOf('?') > 0){
                                    zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
                                }else{
                                    zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
                                }
                            }
                        }
                    }
                }
            }catch(e){}
            return zf_src;
        }

        document.querySelectorAll(".contact-btn").forEach(val => {
            val.addEventListener("click", showZForm_881255);
        })






    }catch(e){}
})();