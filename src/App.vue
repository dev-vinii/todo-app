<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
</script>

<template>
	<main class="h-screen w-screen flex justify-center items-center bg-[#acf4d9]">
		<div class="flex flex-col items-center h-4/6 w-[600px] bg-white rounded-xl p-10 shadow-lg">
			<div class="w-full flex items-center gap-2">
				<input type="text" class="border border-solid border-black rounded-md w-full h-10 p-3">
				<div class="p-1 cursor-pointer active:bg-[#50f8bb] transition duration-200 hover:bg-[#7ef7cb] h-full bg-[#acf4d9] rounded-lg"><Plus :size="32" :stroke-width="1.5" /></div>
			</div>
			
		</div>
	</main>
</template>
