<template>
  <svg
    v-if="isValid"
    :id="myBelt != undefined ? myBelt.id : ''"
    :onClick="oneClick"
    viewBox="0 0 471.2 190.2"
    class="customBelt"
    :data-version="myBelt != undefined ? myBelt.version : ''"
    :data-belt="myBelt != undefined ? JSON.stringify(myBelt.belt) : ''"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <metadata>
      <rdf:RDF
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
      >
        <rdf:Description
          :dc:about="myBelt != undefined ? myBelt.beltRDF.about : ''"
          :dc:title="myBelt != undefined ? myBelt.beltRDF.title : ''"
          :dc:date="new Date().toISOString().slice(0, 10)"
          dc:format="image/svg"
          dc:language="en"
        >
        </rdf:Description>
      </rdf:RDF>
    </metadata>
    <g id="KnotBend3">
      <path
        id="s7l3a"
        d="m169.7,34.3s-1.5,5,.2,7.4,24.9,1.8,24.9,1.8l-11.3-10.2-13.8,1h0Z"
        :style="s7l3"
      />
      <path
        id="border8"
        d="m187.3,45.6c-17.1,0-18.5-2-19-2.8-2.2-3.1-.7-8.5-.5-9.1l.4-1.3,16-1.2,15.6,14.1h-5c-2.8.2-5.3.2-7.5.3h0Zm-15.9-5c1.8.8,10,1.2,18.2,1.2l-6.9-6.2-11.5.9c-.3,1.5-.3,3.2.1,4.2h.1q0,0,0,0Zm-.1,0"
        :style="borderColor"
      />
    </g>
    <g id="KnotBend2">
      <path
        id="s2l3a"
        d="m233.5,112.4s-22.9-1.8-31.8-15.6c-8.9-13.8,52.1-40.5,52.1-40.5v31.9l-20.3,24.2h0Z"
        :style="s2l3"
      />
      <path
        id="border7"
        d="m234.4,114.6h-1c-1-.2-24-2.1-33.4-16.6-1.3-1.9-1.5-4.2-.8-6.6,2-6.5,11.7-14.7,28.9-24.3,12.6-7,24.7-12.4,24.9-12.4l2.8-1.2v35.7l-21.4,25.4h0Zm17.4-55.1c-14.8,6.7-45.6,22.6-48.7,33-.4,1.3-.3,2.3.3,3.3,7.2,11.2,24.9,14.1,29.3,14.6l19.1-22.8v-28.1h0Z"
        :style="borderColor"
      />
    </g>
    <g id="KnotBend1">
      <path
        id="s1l3a"
        d="m238.9,14.7s-5.3-1.9-14.1,8.5c-8.9,10.3,15.1,8.2,15.1,8.2l-.9-16.7h-.1Z"
        :style="s1l3"
      />
      <path
        id="border6"
        d="m234.9,33.6c-5.1,0-11.8-.7-13.6-4.3-1.1-2.1-.4-4.6,1.9-7.4,9.5-11,15.7-9.3,16.3-9l1.3.4,1.1,19.9-1.9.2c-1.1,0-2.9.2-5.1.2h0Zm2.1-16.9c-1.8.3-5.5,1.8-10.7,7.8-1.4,1.6-1.6,2.6-1.4,2.9.8,1.6,7.1,2.4,12.9,2.1l-.7-12.8h-.1Z"
        :style="borderColor"
      />
    </g>
    <g id="BeltWaist">
      <g id="section13">
        <path
          id="s13l2a"
          d="m111.1,45.7l-5.9-.4-45-6.5-36.7-6.5-19.3-3.4s0,0,0,0l-.4,2.6-1.1,7.2v.4c0,0,.2,3.6.2,3.6,13.8,2.3,31,5.1,51,8.1,16.7,2.5,25.4,3.9,37.8,5.4,4.8.6,10.8,1.4,17.9,2.2s5.6.6,8.7,1l.4-4,.6-6.4.3-2.8-8.2-.6Z"
          :style="s13l2a"
        />
        <path
          id="s13l2b"
          d="m91.6,52.3c-12.4-1.6-21-2.9-37.8-5.4-20.1-3-37.4-5.9-51.2-8.2v.4c0,0,.2,3.6.2,3.6l.2,2.5v.3c.3,1.9.8,3.7,1.4,5.3l81.5,11.5,22.8,1.8,6.9-2,2.3-.8.2-2,.4-4c-11-1.2-20.1-2.3-26.9-3.2Z"
          :style="s13l2b"
        />
        <path
          id="s13l3"
          d="m109.2,60.6c-33.7-3.5-69-8.3-105.8-14.6,0-.2-.1-.5-.1-.8,0,0-.1,0-.2,0,.4,21.4,54.4,20.2,113.8,28,.2-2.4.9-9.5,1.1-11.8-2.9-.3-5.8-.6-8.7-.9Z"
          :style="s13l3"
        />
        <path
          id="s13l1"
          d="m112.4,35.4C53.4,28.1,10.5,19,10.5,19c-3,2-5.1,5.6-6.3,9.9,0,0,0,0,0,0l-.4,2.6c14.7,2.8,53.5,10.7,107,16.8,2.7.3,5.5.6,8.3.9l.3-2.8.9-10c-2.6-.3-5.3-.6-7.9-.9Z"
          :style="s13l1"
        />
      </g>
      <g id="section12">
        <path
          id="s12l2a"
          d="m468.8,21.1l-.7-7.7-.2-2.3-41.1,13.1-36.3,9.8-36.1,7.9-7.1,1.6-1.9.3.4,2.4,1.1,7.1.6,3.9c6.8-1.1,14.8-2.4,23.6-4.1,9.2-1.8,25.3-5,45.8-10.9,9.8-2.8,20-6.2,40.3-13.1,4.3-1.4,8.3-2.8,12-4.1l-.4-3.9Z"
          :style="s12l2a"
        />
        <path
          id="s12l2b"
          d="m469.3,26.6v-1.6c-.1,0-.5-3.9-.5-3.9-3.6,1.2-7.5,2.6-11.7,4-20.3,6.8-30.5,10.2-40.3,13.1-20.5,5.9-36.6,9.1-45.8,10.9-9.1,1.8-17.3,3.2-24.2,4.2l.6,3.9.3,1.9.4,2.5,8.5-1.3,20.3-3.1,54.1-13.8,30.1-11.6,8.3-3-.2-2.3Z"
          :style="s12l2b"
        />
        <path
          id="s12l3"
          d="m469.5,26.3c0,0,0,.1,0,.2,0,0-.2,0-.2,0-15.8,5.8-39.7,14.4-42.4,15.4-22.3,6.5-45.9,11.8-70.6,15.8-2.9.5-5.7.9-8.6,1.3l.4,2.5,1.6,10.3c2.8-.4,5.6-.8,8.3-1.2,63.2-9.8,97.4-25.8,105.7-30.6,4.1-2.4,5.8-7.8,6.1-13.8,0,0-.1,0-.2,0Z"
          :style="s12l3"
        />
        <path
          id="s12l1"
          d="m468.1,13.4l-.2-2.3c-1.5-5.7-3.6-9.7-5-9-2.6,1.2-46.9,19.1-109.6,31.2-3,.6-6.1,1.2-9.2,1.7l1.4,8.7.4,2.4c3-.5,6-1.1,8.9-1.6,64.5-12.1,110.1-29.9,112.7-31.1.2,0,.3,0,.5,0,0,0,0,0,0,0,0,0,.2,0,.3,0Z"
          :style="s12l1"
        />
      </g>
      <g id="section11">
        <path
          id="s11l2a"
          d="m355.5,51.8l-.9-7.3-2.3-1.1h-5.1s-1.9.3-1.9.3l-51.9,7-53,1.8-12.4-.4-8.5-.2v3.6c0,0,.1,5.9.1,5.9v4c11.4.3,21.2.3,33.3,0,13.3-.4,23.2-1.1,37.4-2.2,16.3-1.2,26.2-1.9,40-3.6,5.6-.7,11-3.8,22.2-5.7l3.1-2Z"
          :style="s11l2a"
        />
        <path
          id="s11l2b"
          d="m356,55.7l-.5-3.9c-10.9,1.9-19.7,3-25.2,3.7l-40,3.6c-14.2,1-24.2,1.8-37.4,2.2-12.1.4-21.9.3-33.3,0v4c0,0,0,1.7,0,1.7v3.5c0,0,1.4,0,1.4,0l6.9-.3,81.4-3,38.7-5.8,4.8-2.2,3.4-1.7-.3-2Z"
          :style="s11l2b"
        />
        <path
          id="s11l3"
          d="m356.6,60.3l-.3-2.6c-2.9.5-5.7.9-8.6,1.3-37.1,5.5-76.9,8.2-119.7,8.1-2.7,0-5.5,0-8.3,0v3.5c0,0,.2,7.8.2,7.8,2.7,0,5.4,0,8.1.1,6.4,0,12.8.1,19.4.1,39.8,0,73.8-2.7,102.3-6.7,2.8-.4,5.6-.8,8.3-1.2l-1.3-10.4Z"
          :style="s11l3"
        />
        <path
          id="s11l1"
          d="m354.3,41.9l-1.1-8.6c-3,.6-6.1,1.2-9.2,1.7-30.2,5.4-64.2,9.2-99.6,9.2s-10.9,0-16.3-.2c-2.9,0-5.8-.1-8.7-.2v8c.1,0,.2,3.6.2,3.6,2.8,0,5.6,0,8.5.1,4.2,0,8.4,0,12.7,0,37.3,0,73.2-4,105-9.5,3-.5,6-1.1,8.9-1.6l-.3-2.6Z"
          :style="s11l1"
        />
      </g>
      <g id="section10">
        <path
          id="s10l2a"
          d="m225.6,55.6l-6.2-3.7-40.5-1.2-59.6-4.4-5.8,2.2-2.8-.3-.8,6.3,5.5,3.2c12.4,1.4,22,3.8,40.5,5.1,19.8,1.4,34.5,1.8,47.9,2.2,9.1.3,16.8.5,24.1.6v-10h-2.4Z"
          :style="s10l2a"
        />
        <path
          id="s10l2b"
          d="m203.9,61c-13.5-.4-28.2-.8-47.9-2.2-18.2-1.3-33.6-2.8-45.9-4.3l-.5,3.9-.3,2.1,1.6,3.6,6.8.7,49,4,53.2,1.8h1.3s4.4-3.5,4.4-3.5h2.5s0-1.6,0-1.6v-4c-7.3,0-15-.3-24.1-.6Z"
          :style="s10l2b"
        />
        <path
          id="s10l3"
          d="m219.7,67.1c-32.2-.3-66.1-2.2-101.7-5.7-2.9-.3-5.8-.6-8.7-.9l-.5,3.6-1,8.3c3,.3,6,.6,9.2.8,29.8,2.6,64.6,4.5,103,5.2,2.7,0,5.4,0,8.1.1v-11.4c-2.7,0-5.5,0-8.3,0Z"
          :style="s10l3"
        />
        <path
          id="s10l1"
          d="m219.4,43.9c-34.6-1-68.7-4-99.1-7.6-2.6-.3-5.3-.6-7.9-.9l-1.3,10.4-.3,2.5c2.7.3,5.5.6,8.3.9,29.8,3.1,63.8,5.6,100.4,6.3,2.8,0,5.6,0,8.5.1v-11.5c-2.9,0-5.8-.1-8.7-.2Z"
          :style="s10l1"
        />
      </g>
      <path
        id="border5"
        d="m0,37.2c.2.6.1,1.1.3,1.6,0-7.9,2.4-18.4,10.1-22,9.4,2,18.9,3.7,28.4,5.4,24.3,4.3,48.6,7.9,73.1,11,60.3,7.2,121.5,12.2,182.2,6.5,42.5-4.2,84.6-12.8,125.4-25.3,13.3-4.2,26.5-8.4,39.4-13.7,4.2-2.6,7.1,2.5,8.2,6,3.7,11.3,7,28.9-4.8,36.4-13,7-27,11.9-41.1,16.2-53.3,16-109.5,21.3-164.8,22.3h-23.2c-54-.8-108.8-3.5-162.7-10.3-16.6-2.1-33.2-4.5-49.5-8.1C7.4,61.1-.4,55.9.3,40.9c-.2.7-.1,1.5-.3,2.2,0-2,0-3.9,0-5.9ZM461.6,5.2c-82.8,31.9-172.4,46.5-261.1,40.8-42-2.1-83.8-6.7-125.4-12.9-17.1-2.6-34.2-5.4-51.2-8.6-4.4-.2-9.6-3.2-13.6-1.8-3.6,4.1-4.7,9.7-5.1,15.1,0,5.7-.3,14,5.3,17.2,11.3,4,23.4,5.6,35.2,7.7,35.9,5.6,72.1,8.9,108.4,11.1,82,4.5,165.5,5.9,245.8-13.8,20.9-5.3,41.8-11.4,61-21.6,9.2-7.7,4.9-23.7.8-33.3Z"
        :style="borderColor"
      />
    </g>
    <g id="BeltRight">
      <g id="section9">
        <path
          id="s9l2a"
          d="m416.7,131.8l-29.3-13.8-39-18.3-36-17-31.6-15.7-28.3-16-41.2-30.2-10.4,5.4-3.7,1.9c2.5,2.1,4.7,3.9,6.6,5.3,3.1,2.3,2.5,1.7,17.2,12,4.2,3,7.2,5.1,12.8,9,9.1,6.4,11.2,7.7,12.8,8.7,4.8,3.1,8.7,5.2,12.5,7.4,2.9,1.6,5.3,2.9,13.9,7.4,9.9,5.1,14.9,7.7,18,9.3,8.4,4.2,8.8,4.2,19.6,9.5,6.1,3,6.1,3.1,12,6,6.1,3,6.7,3.2,16.3,7.9,11.2,5.4,11.5,5.6,15.8,7.6,5.8,2.7,5.9,2.5,13.6,6,7,3.1,12.3,5.7,15.3,7.1,5.3,2.5,9,4.4,16.1,7.9,6.9,3.4,11.3,5.7,14.5,7.3l3.2-3.3,4.8-4.9.6-1.7-6.2-4.8Z"
          :style="s9l2a"
        />
        <path
          id="s9l2b"
          d="m417.4,143.1c-3.3-1.8-8.1-4.2-17.7-9-7.1-3.5-10.7-5.4-16.1-7.9-3-1.4-8.3-3.9-15.3-7.1-7.7-3.5-7.8-3.3-13.6-6-4.3-2-4.6-2.2-15.8-7.6-9.7-4.7-10.3-4.9-16.3-7.9-5.9-2.9-5.9-3-12-6-10.9-5.4-11.2-5.4-19.6-9.5-3.1-1.6-8.1-4.1-18-9.3-8.6-4.4-11-5.7-13.9-7.4-3.9-2.1-7.7-4.3-12.5-7.4-1.6-1-3.7-2.3-12.8-8.7-5.6-3.9-8.6-6-12.8-9-14.7-10.3-14.1-9.7-17.2-12-.9-.7-1.8-1.4-2.9-2.2l-3.7,1.9-8.2,4.3,11.2,8.6,16.6,11.5,28.7,17.4,27.6,16,31.6,15.6,45.8,23,31.2,13.4,25.8,13.1,1.4-.9,3.9-2.3,1.3-1.3,3.2-3.3s0,0,0,0Z"
          :style="s9l2b"
        />
        <path
          id="s9l3"
          d="m359.1,122c-4.5-2-8.9-4-13.3-6-29.4-13.8-70.8-35.3-92.8-46.9l-.3-.2c-19.5-11.9-43.9-29.5-57.7-39.6l-15.5,8.1c17.5,11.1,62.2,39.1,86.3,52.2,30.4,16.5,85.6,42.2,117.6,57.8,6.8,3.3,13.2,7.1,19.2,10.9l10.3-10.5c-17.4-9.6-35.8-17.8-53.8-25.8Z"
          :style="s9l3"
        />
        <path
          id="s9l1"
          d="m346.6,85.1c-29.1-10.8-104.5-55.1-127.1-68.5l-11.9,6.2c16.6,12.1,35.8,25.4,50.4,34.3,22,11.6,63.1,32.9,92.1,46.6,4.3,1.9,8.7,3.9,13.2,5.9,19,8.5,39.4,17.6,58.9,28.7l11.3-11.4c-28.3-15.9-66.5-34.2-86.9-41.8Z"
          :style="s9l1"
        />
      </g>
      <g id="section8">
        <path
          id="s8l2a"
          d="m460.6,162.5l-13.4-11.6-30.5-19.2-29.3-13.8-39-18.3-15.7-5.9-2.6.2-5.4,4.7,1.7,3.1c.5.2.8,2.8,1.4,3.1,6.1,3,1.5.9,11.1,5.6,11.2,5.4,11.5,5.6,15.8,7.6,5.8,2.7,5.9,2.5,13.6,6,7,3.1,12.3,5.7,15.3,7.1,5.3,2.5,9,4.4,16.1,7.9,9.6,4.8,14.4,7.2,17.7,9,8.2,4.5,14.1,8.4,18,10.9,7.4,4.9,14.3,9.9,20.5,14.7l2.7-2.9,4.8-5.2-2.7-3Z"
          :style="s8l2a"
        />
        <path
          id="s8l2b"
          d="m435.4,154c-3.9-2.5-9.7-6.4-18-10.9-3.3-1.8-8.1-4.2-17.7-9-7.1-3.5-10.7-5.4-16.1-7.9-3-1.4-8.3-3.9-15.3-7.1-7.7-3.5-7.8-3.3-13.6-6-4.3-2-4.6-2.2-15.8-7.6-8.4-4.1-10-4.8-14.2-6.8l-3.7,3.2-1.6,1.4-.3,3.5,31.3,17.7,31.2,13.4,25.8,13.1,20.2,11.6,21.3,18.5,6.8-7.4,2.7-2.9c-6.8-5.3-14.6-11.2-23.1-16.8Z"
          :style="s8l2b"
        />
        <path
          id="s8l3"
          d="m359.1,122c-4.5-2-8.9-4-13.3-6-8.1-3.8-17-8.2-26.3-12.7l-9.9,8.6c26,12.7,54.2,26,73.8,35.5,32,15.6,56.8,41.3,56.8,41.3,0,0,7.1-5.7,14.3-12.9-27.8-23.6-62.1-39-95.4-53.8Z"
          :style="s8l3"
        />
        <path
          id="s8l1"
          d="m469,152c-3.2-11-88-54.1-122.4-66.9-1.3-.5-2.7-1-4.2-1.6l-12.3,10.6c7,3.4,13.7,6.7,19.9,9.6,4.3,1.9,8.7,3.9,13.2,5.9,32.9,14.7,70.2,31.4,99.6,56.7h0c0,.1-.1.1-.1.1-.4.5-.8,1-1.2,1.5,0,0,0,0,0,0,4.9-6,8.5-11.9,7.3-16Z"
          :style="s8l1"
        />
      </g>
      <g id="section7">
        <path
          id="s7l2a"
          d="m205.7,16.7l-10.1,5-3.5,1.7c3.5,3.4,6.7,6.1,9.5,8.2l4.1-1.9,7-3.3,2.2-2.5-9.1-7.3Z"
          :style="s7l2a"
        />
        <path
          id="s7l2b"
          d="m203.8,28.4c-2.3-1.7-5.1-4-8.2-6.7l-3.5,1.7-8.9,4.4,10.6,5.6,5.8-.8,2-.9,4.1-1.9c-.6-.4-1.1-.8-1.8-1.3Z"
          :style="s7l2b"
        />
        <path
          id="s7l3"
          d="m189.9,25.5c-.5-.2-.9-.5-1.2-.9l-16.5,8.1s4.4,2.8,11.5,7.3l15.9-7.4c-3.8-2.8-7.2-5.2-9.7-7.1Z"
          :style="s7l3"
        />
        <path
          id="s7l1"
          d="m213,12.7h0c0,0-11.7,5.7-11.7,5.7,0,0,0,.2,0,.3.1,0,.2-.1.4-.2,3.5,2.6,7.2,5.3,11,8l13.2-6.2c-8-4.7-12.9-7.6-12.9-7.6Z"
          :style="s7l1"
        />
      </g>
      <g id="border4">
        <path
          d="m470.7,151.4c-2-7-28.6-22.4-50.5-34-26-13.8-56.1-27.9-73.1-34.2-32-11.9-121.9-65.5-132.3-71.7h0c-.2-.2-.4-.3-.5-.4-.6-.1-1.2-.3-1.7-.5h-1.5c-.6.3-1.2.5-2,.5l-41.1,21.5,2.9,1.9c.7.4,63.6,40.5,93.7,56.9,22.1,12,56.7,28.6,87.2,43.2,11.2,5.4,21.8,10.4,30.5,14.7,31.3,15.3,56,40.6,56.2,40.9l1.3,1.3,1.4-1.1c.1-.1,8.2-6.6,15.8-14.4,10.8-11.2,15.3-19.2,13.7-24.6h0Zm-16.5,21.7c-5.6,5.7-11.5,10.8-14.1,12.9-5.6-5.5-28.2-26.8-56.1-40.4-8.8-4.3-19.3-9.3-30.5-14.7-30.4-14.6-65-31.1-87-43.1-26.3-14.3-77.8-46.8-90.6-54.9l35.1-18.4h1c7.2,4.3,100.1,59.9,133.6,72.4,38.4,14.3,118.6,56.6,121.2,65.6.6,1.8.4,7.2-12.6,20.6h0Z"
          :style="borderColor"
        />
      </g>
    </g>
    <g id="BeltKnotBottom">
      <g id="section6">
        <path
          id="s6l2a"
          d="m240.8,60l-5.2-3.8-9.3,6.6-11.8,8.9-18.2,13.8-7.3,5.3,6.2,4.9,2.6,2c15.2-11.9,30.4-23.8,45.6-35.7l-2.7-2Z"
          :style="s6l2a"
        />
        <path
          id="s6l2b"
          d="m243.5,62l-2.7-2c-15.2,11.9-30.3,23.8-45.5,35.6l2.6,2,7.7,6,13.9-10.2,17.6-12,15-13.2-8.6-6.3Z"
          :style="s6l2b"
        />
        <path
          id="s6l3"
          d="m237,57.3l-15.6-11.5-45.6,34.5,14.6,11.5c12.6-9.1,28.2-20.4,35.2-25.4l11.3-9.2Z"
          :style="s6l3"
        />
        <path
          id="s6l1"
          d="m250.9,67.4l-15.6,12.7c-6.2,4.3-19.4,13.9-31.2,22.5l11.6,9.1c16-9.8,51.5-32.3,51.5-32.3l-16.3-12Z"
          :style="s6l1"
        />
      </g>
      <g id="section5">
        <path
          id="s5l2a"
          d="m207,86.5l-6-4.5-4.6,3.5-19.4,14,7.4,4.6,2.9,1.8c7.5-5.8,10.3-9.1,17.8-14.9l1.9-4.6Z"
          :style="s5l2a"
        />
        <path
          id="s5l2b"
          d="m209.6,88.5l-2.7-2c-7.5,5.9-15.1,11.8-22.6,17.7l2.9,1.8,8.3,5.2,5.9-4.5,16.5-12.1-8.2-6.1Z"
          :style="s5l2b"
        />
        <path
          id="s5l3"
          d="m171,84l2.3,13h0s2.1,1.4,5.2,3.5c6-4.3,15.1-10.9,24-17.4l-15.3-11.4-16.2,12.3Z"
          :style="s5l3"
        />
        <path
          id="s5l1"
          d="m193.7,110.2c6.7,3.9,12.8,6.9,14.7,5.9,1.7-.9,10.7-6.4,21.1-12.9l-12.9-9.6c-7.7,5.6-16.2,11.7-22.8,16.6Z"
          :style="s5l1"
        />
      </g>
      <g id="border3">
        <path
          d="m207.6,118.3c-2.2,0-7-1.5-19.5-9.2-8.2-5-15.9-10.4-16-10.5l-.7-.5-2.7-15,52.6-39.8,49.4,36.2-2.5,1.6c-2.2,1.4-54.3,34.5-59,36.8-.4.2-.8.4-1.7.4Zm0-4s0,0,0,0c0,0,0,0,0,0Zm-32.4-18.5c17,11.9,30,18.8,32.5,18.4,3.9-2,37-22.9,56.1-35l-42.2-31-48.2,36.6,1.9,11Z"
          :style="borderColor"
        />
      </g>
    </g>
    <g id="BeltLeft">
      <g id="section4">
        <path
          id="s4l2a"
          d="m204.2,61.1l-5.7-9.6-8.4,3.5-16.7,9.1-16.7,9.4-33.4,16.3-23.6,12.7-22.9,13.4-24.3,14.2-23.2,12.7-17.5,11.4c.3.3.6.7.9,1,1.5.6,2.4,1.8,2.8,3.2.9.5,1.5,1.3,1.9,2.1l.7.7,2.7,2.4c24.3-14.2,80.6-47,117.4-66.7,9.8-5.2,23.5-12.5,41.4-21,14.9-7,20.6-9.2,26.5-11.8l-1.9-3.2Z"
          :style="s4l2a"
        />
        <path
          id="s4l2b"
          d="m206.1,64.3l-1.9-3.2c-5.3,2.3-11.3,4.7-24.6,11-17.9,8.5-31.6,15.8-41.4,21-38.2,20.4-97.6,55.1-120.2,68.3l2.7,2.4,5.3,4.6,6.1-5,16-8.3,15.6-9.5,21.4-11.6,23.6-13.4,21.6-11.3,20.5-10.9,28.7-13.8,23.2-10.9,6.9-3-3.7-6.3Z"
          :style="s4l2b"
        />
        <path
          id="s4l3"
          d="m207.6,66.8c-62.3,26.6-126.8,67.7-184,98.8,4.3,4.9,10,10.9,14.5,10.3,6.2-.8,55.8-32.1,87.9-51.2,21.2-12.6,62.7-33.5,88.4-46.3l-6-10.2-.8-1.4Z"
          :style="s4l3"
        />
        <path
          id="s4l1"
          d="m193.9,43.6C117.8,76.8,5.3,145.4,5.3,145.4c2,2.6,4.8,5.9,8.3,9.6,57-32,125.4-72,186.7-100.5l-5.1-8.6-1.3-2.3Z"
          :style="s4l1"
        />
      </g>
      <g id="section3">
        <path
          id="s3l2a"
          d="m242.5,36.1l-8.4,2.5-9.1,2.9-12,4.8-12,4-10.9,4.6-16.7,9.1-10.3,6.4-.8,2.4,4.5,5.2h3.9c3.3-1.5,5.2-.4,8.9-2.1,20.5-9.7,23.6-10.1,33.8-15.3,1.6-.8,6.5-3.3,13.3-5.7,4.5-1.6,8-2.4,9.3-2.7,2.7-.6,6.1-1.3,9.9-1.8l1.5-4.2,2.7-7.3v-2.9s-7.6,0-7.6,0Z"
          :style="s3l2a"
        />
        <path
          id="s3l2b"
          d="m236,48.3c-1.2.3-4.8,1.2-9.3,2.7-6.9,2.4-11.7,4.9-13.3,5.7-10.2,5.2-13.3,5.6-33.8,15.3-4.5,2.1-8.7,4.2-12.7,6.1l2.4,2.8,2.2,2.6,4,.3,4.2.6,23.2-10.9,23.2-10.2,17.5-6.5,2.3-6.3,1.5-4.2c-4.5.5-8.4,1.2-11.4,1.9Z"
          :style="s3l2b"
        />
        <path
          id="s3l3"
          d="m245.7,53.1h-1.9c-23.7,7.7-48,18.4-72.3,30.5l9.8,11.5c28.7-14.6,55.5-27.7,55.5-27.7,0,0,5-6.6,8.9-14.3Z"
          :style="s3l3"
        />
        <path
          id="s3l1"
          d="m206.2,38.4c-15.9,6.4-34,14.9-52.7,24.3l8.9,10.3c20.5-10.5,40.8-20.2,60-28.4l19.3-5.4h0c0-.1,8.4-.1,8.4-.1.3-9.7-8.8-14.9-43.9-.7Z"
          :style="s3l1"
        />
      </g>
      <g id="Patch" :style="hasPatch">
        <g id="Professor" :style="hasProfessorPatch">
          <path
            id="professorpatch"
            d="m143.1,114.9c-5.8-5.8-20.6-20.8-28-31l-90.7,50.6c6.3,7.6,19.8,23.3,30.2,31.8l88.5-51.4h0Z"
            :style="professorPatchColor"
          />
          <path
            id="right2"
            d="m57,165.6c-10.6-8.3-25-25.1-31.3-32.8l-3.5,2c6.7,8.2,19.8,23.7,31.2,32.9l3.6-2.1h0Z"
            :style="professorBorderColor"
          />
          <path
            id="left2"
            d="m141.7,116.4l3.6-2.1c-6.8-6.7-21.4-21.2-28.9-32l-3.6,2c7.3,10.4,22.7,26.1,28.9,32.1h0Z"
            :style="professorBorderColor"
          />
        </g>
        <path
          id="patch"
          d="m131.8,120.9c-5.7-5.9-20.3-21.4-26.9-31.3l-68.6,38.3c5.6,7.1,18.8,23.3,29,31.9,0-.1,66.5-39,66.5-38.9Z"
          :style="patchColor"
        />
        <g id="Stripes">
          <path
            id="stripe10"
            d="m128.8,123.3c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c6.1,8.1,18,23.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe10"
          />
          <path
            id="stripe9"
            d="m122.3,126.4c-7.7-6.6-21.4-22.9-28.7-32.7l-3.5,1.7c6.1,8.1,18,23.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe9"
          />
          <path
            id="stripe8"
            d="m116.2,130.3c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c6.1,8.1,18,23.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe8"
          />
          <path
            id="stripe7"
            d="m109.7,133.5c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c6.6,8.8,18.5,23.9,28.6,32.7l3.6-1.8h0Z"
            :style="stripe7"
          />
          <path
            id="stripe6"
            d="m103.8,137.7c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c6.1,8.1,18,23.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe6"
          />
          <path
            id="stripe5"
            d="m97.3,140.8c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c6.1,8.1,18,23.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe5"
          />
          <path
            id="stripe4"
            d="m91,144.3c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c5.4,7.2,16.9,22.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe4"
          />
          <path
            id="stripe3"
            d="m84.8,148c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c4.4,5.9,15.1,21,28.6,32.7l3.6-1.8h0Z"
            :style="stripe3"
          />
          <path
            id="stripe2"
            d="m78.8,152c-9.9-8.4-23-25-28.7-32.7l-3.5,1.7c6.1,8.1,18,23.5,28.6,32.7l3.6-1.8h0Z"
            :style="stripe2"
          />
          <path
            id="stripe1"
            d="m73.2,155.8c-10-8.2-23.5-24.6-29.4-32.1l-3.5,1.8c6.2,8,18.5,23.1,29.3,32.1l3.6-1.9h0Z"
            :style="stripe1"
          />
        </g>
        <g id="PatchBorder">
          <path
            id="left1"
            d="m134.1,120.3c-6.4-6.6-20.4-21.1-27.4-31.8l-3.5,2c6.8,10.2,21.7,26,27.4,31.9l3.6-2.1h-.1Z"
            :style="patchBorderColor"
          />
          <path
            id="right1"
            d="m67.7,159.2c-10-8.1-23.7-24.9-29.6-32.3l-3.5,2c6.3,8,18.8,23.4,29.5,32.5l3.6-2.2h0Z"
            :style="patchBorderColor"
          />
        </g>
      </g>
      <path
        id="border2"
        d="m37.1,178c-5.8,0-12.1-7.2-16.7-12.5-1.3-1.5-2.4-2.7-3.2-3.5-5-4.8-9.7-10-14-15.4l-1.4-1.8,1.9-1.2c.3-.2,31.8-19.4,72.2-42.1,37.3-20.9,89.9-49.2,129.1-65.1,24.7-10,39.3-11.5,44.6-4.6,7.9,10.3-9.7,34-11.7,36.7l-.3.4-.4.2c-.8.4-79,38.4-110.6,57.2-8.8,5.2-19.1,11.5-29.1,17.6-34,20.7-55,33.3-59.6,33.9h-.9v.2h.1Zm-29.2-32.1c3.8,4.6,7.8,9.1,12.2,13.2.9.9,2.1,2.2,3.4,3.8,3.8,4.3,10.1,11.6,14,11.1,4-.5,33.9-18.7,58-33.3,10-6.1,20.3-12.3,29.1-17.6,30.6-18.2,104.1-54.1,110.5-57.2,6.9-9.3,15.9-25.6,11.4-31.5-2.2-2.9-10.4-6-39.9,5.9C137.1,68.4,24.1,136.2,7.9,145.9h0Z"
        :style="borderColor"
      />
    </g>
    <g id="BeltKnotCenter">
      <g id="section2">
        <path
          id="s2l2a"
          d="m258.7,56.2l-4-.4c-.5,17.2-1,34.4-1.6,51.6l4.1-1.7,7.6-3.2,1.9-10.3,1.4-35-9.4-1Z"
          :style="s2l2a"
        />
        <path
          id="s2l2b"
          d="m254.7,55.7l-6-.7-.3,9-.4,17.4-1,28.5,6.2-2.6,4.1-1.7c.5-16.5,1-33,1.5-49.4l-4-.4Z"
          :style="s2l2b"
        />
        <path
          id="s2l3"
          d="m237,53.8c-.9,26-2.2,56.2-3.5,58.8-1,1.9,6.3,0,15-3.3,1.5-14.5,2.5-34.7,3-53.9l-2.2-.2-12.4-1.3Z"
          :style="s2l3"
        />
        <path
          id="s2l1"
          d="m265.5,56.9c-.4,16-1.2,32.7-2.3,46.3,7.4-3.5,13.4-7,13.6-8.9.5-3.2,2.9-21.2,3.7-35.8l-15-1.6Z"
          :style="s2l1"
        />
      </g>
      <g id="section1">
        <path
          id="s1l2a"
          d="m267.7,37.1v-6.3l-8.1-5-3.9-2.5c-.4,13.9.1,26.4-.3,40.4l3,1.5,6.8.3,1.9-1.1,1.3-16.5-.8-10.7Z"
          :style="s1l2a"
        />
        <path
          id="s1l2b"
          d="m255.7,23.3l-3.9-2.4-1.9,8.7-.9,15.1-.7,17.9,1,1,1.9,1.3h3.2c0,.1,4,.3,4,.3.4-13.1.8-26.3,1.2-39.4l-3.9-2.5Z"
          :style="s1l2b"
        />
        <path
          id="s1l3"
          d="m251.8,20.9c-6.5-3.7-12-6.1-13.7-5.3,0,0-.6,24.4-1.5,48.7l14.6.6c.5-15.9.7-31.8.6-44Z"
          :style="s1l3"
        />
        <path
          id="s1l1"
          d="m279.1,39.3c-1.7-1.7-6.9-5.6-13.2-9.7,0,10.8-.2,23.3-.6,35.9l14.7.6c1-12.3,1.3-24.4-.9-26.7Z"
          :style="s1l1"
        />
      </g>
      <g id="border1">
        <path
          d="m233.4,114.6c-1.2,0-1.9-.3-2.5-1-.6-.7-.7-1.8-.2-2.7,1.5-4,3.5-61.1,4.4-96.2v-1.2s1.1-.5,1.1-.5c1.2-.6,4-2,22.4,9.3,8.8,5.4,18.3,12.2,20.9,14.7h0c1,1.1,3.5,3.6,1.4,28.8-1.1,12.8-2.8,25.4-3.2,27.9-.2,1.2-.5,3.8-15.3,10.7-7.7,3.6-16.9,7.1-23.1,8.9-2.7.8-4.6,1.2-5.9,1.2Zm5.6-97.8c-.4,17.6-2.2,80.4-4.2,93.7,7.9-1.4,36.9-13.4,39-17.3,2.5-16.4,5.7-49.8,2.8-53.2-5.2-5.2-30.8-21.6-37.6-23.2Zm34.8,76.5s0,0,0,0c0,0,0,0,0,0Zm0-.2h0s0,0,0,0Z"
          :style="borderColor"
        />
      </g>
    </g>
  </svg>
  <div v-else>
    <h1>Invalid beltParms received</h1>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from "vue";
import { getBeltPropsRandom, BeltProps, BeltCallbackType } from "../Belt";

const index = ref(0);
const props = defineProps<{
  beltProps: BeltProps[];
}>();

const isValid = ref(false);
const myBelt = ref(props.beltProps ? props.beltProps[index.value] : undefined);
const clickDelay: number = 700;
const clickCount = ref(0);
let clickTimer: any = null;
let refreshIntervalId: any = undefined;

watch(
  () => props.beltProps,
  () => {
    updateProps();
  }
);

const transitionNextBelt = () => {
  if (myBelt.value) {
    const originalId: string = myBelt.value.id;
    index.value =
      index.value === props.beltProps.length - 1 ? 0 : index.value + 1;
    let nextBelt: BeltProps = props.beltProps[index.value];
    if (
      nextBelt.randomSettings.includeBelts !== undefined &&
      nextBelt.randomSettings.includeBelts.length > 0
    ) {
      const randomBelt: BeltProps[] = getBeltPropsRandom(
        nextBelt.randomSettings.hasPatch,
        nextBelt.randomSettings.hasProfessorPatch,
        nextBelt.randomSettings.stripeCount,
        nextBelt.randomSettings.stripePosition,
        nextBelt.transitionCSS,
        nextBelt.randomSettings.includeBelts,
        nextBelt.refreshInterval,
        nextBelt.callback
      );
      nextBelt = randomBelt[0];
    }
    nextBelt.id = originalId; // keep the same element id
    myBelt.value = nextBelt;
    doCallback(null, BeltCallbackType.Refresh);
    refreshIntervalId = setTimeout(
      transitionNextBelt,
      myBelt.value.refreshInterval
    );
  }
};

const updateProps = () => {
  if (!props.beltProps) {
    isValid.value = false;
  } else {
    isValid.value = true;
    index.value = 0;
    myBelt.value = props.beltProps[index.value];
    if (
      myBelt.value != undefined &&
      myBelt.value.refreshInterval != undefined &&
      myBelt.value.refreshInterval > 0
    ) {
      if (refreshIntervalId != undefined) {
        clearInterval(refreshIntervalId);
      }
      refreshIntervalId = setTimeout(
        transitionNextBelt,
        myBelt.value.refreshInterval
      );
    }
  }
};

if (typeof window !== "undefined") {
  updateProps();
}

onUnmounted(() => {
  if (refreshIntervalId != undefined) {
    clearInterval(refreshIntervalId);
  }
});

const oneClick = (event: any) => {
  if (myBelt.value != undefined) {
    clickCount.value++;
    if (clickCount.value === 1) {
      clickTimer = setTimeout(function () {
        doCallback(event, BeltCallbackType.Click);
        clickCount.value = 0;
      }, clickDelay);
    } else {
      clearTimeout(clickTimer);
      downLoadSVG(event);
      doCallback(event, BeltCallbackType.DoubleClick);
      clickCount.value = 0;
    }
  }
};

const doCallback = (event: Event | null, callbackType: BeltCallbackType) => {
  if (myBelt.value != undefined && myBelt.value.callback != null) {
    myBelt.value.callback(event, callbackType, { ...myBelt.value });
  }
};

const downLoadSVG = (event: any) => {
  const svgContent = event.target.closest("svg").outerHTML;
  const blob = new Blob([svgContent], {
    type: "image/svg+xml",
  });
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = URL.createObjectURL(blob);
  link.download = "svg-belt";

  document.body.appendChild(link);
  link.click();
  link.remove();
};

const additionalStyles = () => {
  return transition();
};

const transition = () => {
  if (myBelt.value === undefined) {
    return "";
  }
  if (!myBelt.value.transitionCSS) return "";
  else return `${myBelt.value.transitionCSS};`;
};

const borderColor = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.border}; ${additionalStyles()}`;
});

const s1l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s1l1}; ${additionalStyles()}`;
});

const s1l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s1l2a}; ${additionalStyles()}`;
});

const s1l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s1l2b}; ${additionalStyles()}`;
});

const s1l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s1l3}; ${additionalStyles()}`;
});

const s2l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s2l1}; ${additionalStyles()}`;
});

const s2l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s2l2a}; ${additionalStyles()}`;
});

const s2l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s2l2b}; ${additionalStyles()}`;
});

const s2l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s2l3}; ${additionalStyles()}`;
});

const s3l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s3l1}; ${additionalStyles()}`;
});

const s3l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s3l2a}; ${additionalStyles()}`;
});

const s3l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s3l2b}; ${additionalStyles()}`;
});

const s3l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s3l3}; ${additionalStyles()}`;
});

const s4l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s4l1}; ${additionalStyles()}`;
});

const s4l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s4l2a}; ${additionalStyles()}`;
});

const s4l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s4l2b}; ${additionalStyles()}`;
});

const s4l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s4l3}; ${additionalStyles()}`;
});

const s5l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s5l1}; ${additionalStyles()}`;
});

const s5l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s5l2a}; ${additionalStyles()}`;
});

const s5l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s5l2b}; ${additionalStyles()}`;
});

const s5l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s5l3}; ${additionalStyles()}`;
});

const s6l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s6l1}; ${additionalStyles()}`;
});

const s6l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s6l2a}; ${additionalStyles()}`;
});

const s6l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s6l2b}; ${additionalStyles()}`;
});

const s6l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s6l3}; ${additionalStyles()}`;
});

const s7l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s7l1}; ${additionalStyles()}`;
});

const s7l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s7l2a}; ${additionalStyles()}`;
});

const s7l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s7l2b}; ${additionalStyles()}`;
});

const s7l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s7l3}; ${additionalStyles()}`;
});

const s8l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s8l1}; ${additionalStyles()}`;
});

const s8l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s8l2a}; ${additionalStyles()}`;
});

const s8l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s8l2b}; ${additionalStyles()}`;
});

const s8l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s8l3}; ${additionalStyles()}`;
});

const s9l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s9l1}; ${additionalStyles()}`;
});

const s9l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s9l2a}; ${additionalStyles()}`;
});

const s9l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s9l2b}; ${additionalStyles()}`;
});

const s9l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s9l3}; ${additionalStyles()}`;
});

const s10l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s10l1}; ${additionalStyles()}`;
});

const s10l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s10l2a}; ${additionalStyles()}`;
});

const s10l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s10l2b}; ${additionalStyles()}`;
});

const s10l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s10l3}; ${additionalStyles()}`;
});

const s11l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s11l1}; ${additionalStyles()}`;
});

const s11l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s11l2a}; ${additionalStyles()}`;
});

const s11l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s11l2b}; ${additionalStyles()}`;
});

const s11l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s11l3}; ${additionalStyles()}`;
});

const s12l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s12l1}; ${additionalStyles()}`;
});

const s12l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s12l2a}; ${additionalStyles()}`;
});

const s12l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s12l2b}; ${additionalStyles()}`;
});

const s12l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s12l3}; ${additionalStyles()}`;
});

const s13l1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s13l1}; ${additionalStyles()}`;
});

const s13l2a = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s13l2a}; ${additionalStyles()}`;
});

const s13l2b = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s13l2b}; ${additionalStyles()}`;
});

const s13l3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.s13l3}; ${additionalStyles()}`;
});

const hasPatch = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `visibility: ${myBelt.value.hasPatch ? "visible" : "hidden"};`;
});

const hasProfessorPatch = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `visibility: ${
    myBelt.value.hasProfessorPatch ? "visible" : "hidden"
  };`;
});

const professorPatchColor = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.professorPatch}; ${additionalStyles()}`;
});

const professorBorderColor = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.professorBorder}; ${additionalStyles()}`;
});

const patchColor = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.patch}; ${additionalStyles()}`;
});

const patchBorderColor = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${myBelt.value.patchBorder}; ${additionalStyles()}`;
});

const stripeStyle = (stripe: number, fill: string) => {
  if (myBelt.value === undefined) {
    return "";
  }
  return `fill: ${fill}; ${additionalStyles()} visibility: ${
    myBelt.value.stripeCount > 0 && myBelt.value.stripeCount >= stripe
      ? "visible"
      : "hidden"
  };`;
};

const getStripeIndex = (index: number): number => {
  if (myBelt.value === undefined) {
    return -1;
  }
  if (myBelt.value.stripePosition === "Left") {
    return index;
  } else {
    return 11 - index;
  }
};

const stripe1 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(1), myBelt.value.stripe1);
});

const stripe2 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(2), myBelt.value.stripe2);
});

const stripe3 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(3), myBelt.value.stripe3);
});

const stripe4 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(4), myBelt.value.stripe4);
});

const stripe5 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(5), myBelt.value.stripe5);
});

const stripe6 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(6), myBelt.value.stripe6);
});

const stripe7 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(7), myBelt.value.stripe7);
});

const stripe8 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(8), myBelt.value.stripe8);
});

const stripe9 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(9), myBelt.value.stripe9);
});

const stripe10 = computed(() => {
  if (myBelt.value === undefined) {
    return "";
  }
  return stripeStyle(getStripeIndex(10), myBelt.value.stripe10);
});
</script>

<style>
.customBelt:hover {
  cursor: pointer;
}
</style>
