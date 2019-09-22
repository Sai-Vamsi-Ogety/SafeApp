/**
 * Copyright @ 2019 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["dojo/text!./AreaExtrudeMaterial.xml","esri/core/declare","../../webgl-engine-extensions/GLSLShader","../../webgl-engine-extensions/GLSLProgramExt","../../support/fx3dUtils"],function(e,i,r,t,s){var n=i(null,{declaredClass:"esri.views.3d.effects.AreaExtrude.AreaExtrudeMaterial",constructor:function(e){this._gl=e.gl,this._shaderSnippets=e.shaderSnippets,this._program=null,this._viewingMode=e.viewingMode,this._pushState=e.pushState,this._restoreState=e.restoreState},destroy:function(){this._program&&(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(e,i){var r="";if(null!=i)if(Array.isArray(i))for(var t=0,s=i.length;t<s;t++){var n=i[t];r+="#define "+n+"\n"}else for(var n in i)r+="#define "+n+"\n";return this._shaderSnippets.defines+"\n"+r+e},loadShaders:function(){if(this._shaderSnippets){null!=this._shaderSnippets.areaExtrudeVS&&null!=this._shaderSnippets.areaExtrudeFS||this._shaderSnippets._parse(e);var i=[];"global"==this._viewingMode?i.push("GLOBAL"):i.push("LOCAL");var s=this._addDefines(this._shaderSnippets.areaExtrudeVS,i),n=new r(35633,s,this._gl),a=new r(35632,this._shaderSnippets.areaExtrudeFS,this._gl);this._program=new t([n,a],this._gl)}return this._initResources()},getProgram:function(){return this._program},_initResources:function(){return!0},bind:function(e,i){this._program.use(),this._program.uniformMatrix4fv("ls",e.proj),this._program.uniformMatrix4fv("lm",e.view),this._program.uniform3fv("es",e.camPos),this._program.uniform3fv("ps",e.camPos),this._program.uniform4fv("ei",e.viewport),this._program.uniform3fv("pe",e.lightingData.direction),this._program.uniform4fv("po",e.lightingData.ambient),this._program.uniform4fv("os",e.lightingData.diffuse),this._program.uniform4fv("io",e.lightingData.specular),this._oldTex=this._gl.getParameter(32873);var r=i._activeTextureUnit;r>i.parameters.maxVertexTextureImageUnits-1-3&&(console.warn("Many textures are binded now, 3DFx lib may be work abnormally."),r=0),e.ie.bind(r+1),this._program.uniform1i("ie",r+1),e.ip.bind(r+2),this._program.uniform1i("ip",r+2),this._program.uniform2fv("ms",e.ms),this._program.uniform2fv("ss",[e.ss,e.oe]),this._program.uniform2fv("om",e.om),this._gl.activeTexture(33984+r+3),this._gl.bindTexture(3553,e.oo),this._program.uniform1i("oo",r+3),this._program.uniform1f("so",e.so),this._program.uniform1f("sp",e.sp),this._program.uniform3fv("sm",e.sm),this._program.uniform1f("is",e.time),this._program.uniform1i("sl",e.reachedRepeatLimit),1!=i._depthTestEnabled&&(this._pushState(["setDepthTestEnabled",i._depthTestEnabled]),i.setDepthTestEnabled(!0)),1!=i._polygonCullingEnabled&&(this._pushState(["setFaceCullingEnabled",i._polygonCullingEnabled]),i.setFaceCullingEnabled(!0)),1!=i._blendEnabled&&(this._pushState(["setBlendingEnabled",i._blendEnabled]),i.setBlendingEnabled(!0))},bindVec3:function(e,i){this._program.uniform3fv(e,i)},release:function(e){this._gl.activeTexture(33984+e._activeTextureUnit+1),this._gl.bindTexture(3553,this._oldTex),this._restoreState(e),this._gl.useProgram(null)}});return n});