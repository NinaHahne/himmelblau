<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>

<div class="flex min-h-screen">

    <!-- Sidebar Navigation -->
    <aside class="w-72 bg-sky-blue text-gray-800 fixed h-full">
        <div class="p-6 h-full">
            <!-- Logo -->
            <a href="/" aria-label="Himmelblau Startseite" class="block mb-6">
                <img
                    src="/images/logo.webp"
                    alt="Himmelblau Logo"
                    class="logo mx-auto"
                />
            </a>

            <!-- Navigation Links -->
            <nav>
                <ul class="space-y-4 text-lg">
                    <li>
                        <a href="/" class="block text-stem-green hover:text-bluebell transition-colors duration-300">
                            Blumenladen
                        </a>
                    </li>
                    <li>
                        <a href="/himmelblau" class="block text-navy hover:text-gold transition-colors duration-300">
                            Himmelblau
                        </a>
                    </li>
                    <li>
                        <a href="/blueten-spuren" class="block text-navy hover:text-gold transition-colors duration-300">
                            BlütenSpuren
                        </a>
                    </li>
                    <li>
                        <a href="/tanzspuren" class="block text-navy hover:text-gold transition-colors duration-300">
                            TanzSpuren
                        </a>
                    </li>
                    <li>
                        <a href="/bildergalerie" class="block text-navy hover:text-gold transition-colors duration-300">
                            Bildergalerie
                        </a>
                    </li>
                </ul>
				<ul class="space-y-4 text-lg">
                    <li>
                        <a href="/impressum" class="block text-navy hover:text-gold transition-colors duration-300">
                            Impressum
                        </a>
                    </li>
                    <li>
                        <a href="/datenschutz" class="block text-navy hover:text-gold transition-colors duration-300">
                            Datenschutz
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-72 p-8 bg-mint">
        {@render children()}
    </main>

</div>
