import"./logseq.f6c55fde.js";const c=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}};c();const s=(o,n)=>[...Array(n).keys()].reduce(e=>e+o,"");async function a(o){const n=await logseq.Editor.getSelectedBlocks();if(n&&n.length>1)for(let e of n){let i=/^#{1,6}\s+/.test(e.content)?e.content.replace(/^#{1,6}\s+/,""):e.content;o>0?await logseq.Editor.updateBlock(e.uuid,s("#",o)+" "+i):await logseq.Editor.updateBlock(e.uuid,i)}else{const e=await logseq.Editor.getCurrentBlock();if(e?.uuid){let i=/^#{1,6}\s+/.test(e.content)?e.content.replace(/^#{1,6}\s+/,""):e.content;o>0?await logseq.Editor.updateBlock(e.uuid,s("#",o)+" "+i):await logseq.Editor.updateBlock(e.uuid,i)}}}async function d(){for(let o of[0,1,2,3,4,5,6])logseq.App.registerCommandPalette({key:`heading-level-shortcuts-h${o}`,label:`Set block to heading level ${o}`,keybinding:{mode:"global",binding:"mod+"+o}},async()=>{await a(o)})}logseq.ready(d).catch(console.error);
