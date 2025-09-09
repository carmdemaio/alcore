
        // Sample data for initial listings
        const sampleListings = [
            {
                id: 1,
                name: "Alameda City Beat Podcast",
                category: "Information",
                description: "insightful interviews on a variety of topics from folks on our island.",
                url: "https://islandcitybeat.com/",
                image: "/images/alamedaCityBeatPodcast.webp"
            },
            {
                id: 2,
                name: "Financial and Energy Assistance for Low Income Residents",
                category: "Utilities",
                description: "Alameda Municipal Power's (AMP) Energy Assistance Program (EAP) offers our eligible income-qualified residential customers a 25% discount on their monthly energy costs.",
                url: "https://www.alamedamp.com/166/Financial-Assistance-EAP",
                image: "/images/AMPfinancialAssistance.png"
            },
            {
                id: 3,
                name: "Alameda Backyard Growers",
                category: "Food",
                description: "Alameda Backyard Growers (ABG) is a network of gardeners in Alameda, California who are interested in growing food and donating extra fruit and vegetables to the Alameda Food Bank.",
                url: "https://alamedabackyardgrowers.org/",
                image: "/images/abg_logo.jpg"
            },
            {
                id: 4,
                name: "Alameda Food Bank",
                category: "Food",
                description: "Bringing your creative visions to life with stunning designs.",
                url: "https://www.alamedafoodbank.org/",
                image: "/images/alamedaFoodBankLogo.png"
            },
           {
                id: 5,
                name: "East Bay Transit Union",
                category: "Transportation",
                description: "To ensure AC Transit, The County Connection, Westcat, and all public transportation in the East Bay is prioritized and made the most accessible, reliable, and affordable for all people above all for-profit, private, polluter transportation.",
                url: "https://ebtru.org/",
                image: "/images/ebtu.jpg"
            },
            {
                id: 6,
                name: "Alameda Ceasefire",
                category: "Organization",
                description: "Alameda, CA families & friends solidarity group. End the Occupation. End all US aid to Israel. Free Palestine.",
                url: "https://www.instagram.com/alameda4ceasefire/",
                image: "/images/alamedaCeasefireLogo.jpeg"
            },
            {
                id: 7,
                name: "Alameda Mastik Senior Center",
                category: "Organization",
                description: " Mastick Senior Center, a division of the City of Alameda Recreation & Park Department (ARPD), provides a variety of programs and services in the areas of health, education, and recreation to meet the needs of adults age 50 and older.",
                url: "https://www.mastickcenter.com/",
                image: "/images/mastickSeniorCenter.jpg"
            },
            {
                id: 8,
                name: "Alameda Free Library",
                category: "Education",
                description: "The City of Alameda has its own library system which offers all sorts of servies on their own",
                url: "https://www.alamedafree.org/Home",
                image: "/images/alamedaFreeLibrarySeal.png"
            },
            {
                id: 9,
                name: "Clipper START program",
                category: "Transportation",
                description: "Adults age 19-64 who have an Electronic Benefits Transfer (EBT) card or Medi-Cal ID card are potentially eligible for the Clipper START program",
                url: "https://www.clipperstartcard.com/s/",
                image: "/images/clipperStart.avif"
            },
            {
                id: 10,
                name: "Alameda Free Library",
                category: "Education",
                description: "The City of Alameda has its own library system which offers all sorts of servies on their own. Many of the services listed here are made available throught the library.",
                url: "https://www.alamedafree.org/Home",
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 11,
                name: "Adult Literacy (Alameda Reads)",
                category: "Education",
                description: "The program has been helping adults improve their reading and writing skills for more than 30 years. Adult learners are at least 18 years old",
                url: "https://www.alamedafree.org/SERVICES/Adult-Literacy",
                image: "/images/alamedaReads.png"
            },
            {
                id: 12,
                name: "The California Historical Radio Society",
                category: "Education",
                description: "organization founded in 1974 to promote the preservation, restoration, research and publication of early radio, wireless communication, and broadcasting history. Has a museam in Alameda and holds educational events.",
                url: "https://californiahistoricalradio.com/",
                image: "/images/alamedaRadio.png"
            },
            {
                id: 13,
                name: "Alameda Meals on Wheels",
                category: "Food",
                description: "Promoting independent living for persons of all ages.",
                url: "https://alamedamealsonwheels.org/",
                image: "/images/Alameda-Meals-on-Wheels-Logo.png"
            },
            {
                id: 14,
                name: "Legal Access Alameda",
                category: "Legal",
                description: "Bridging the Justice Gap for Alameda County's Low-income Community",
                url: "https://www.vlsc-acba.org/",
                image: "/images/Legal Access Alameda Logo FINAL.avif"
            },
            {
                id: 15,
                name: "Friends of The Alameda Animal Shelter",
                category: "Organization",
                description: "FAAS shelters and cares for abandoned companion animals, finds them new homes, and prevents animal cruelty through education and outreach.",
                url: "https://www.alamedaanimalshelter.org/",
                image: "/images/FAAS.png"
            },
            {
                id: 16,
                name: "Casual Carpool Come Back",
                category: "Transportation",
                description: "On a mission to bring casual carpool back to the Bay Area.",
                url: "https://sfcasualcarpool.my.canva.site/casualcarpool",
                image: "/images/SFCC.png"
            },
            {
                id: 17,
                name: "Community Vision",
                category: "Finance",
                description: "We believe that community ownership of community assets is one of the most powerful tools for cultivating thriving communities, promoting economic justice, and building power.",
                url: "https://communityvisionca.org",
                image: "/images/CommunityVision.webp"
            },
            {
                id: 18,
                name: "The Morning Bun",
                category: "Information",
                description: "This blog is about Alameda, California, where morning buns are baked by the thousands.",
                url: "https://themorningbun.com",
                image: "/images/morningBun.jpg"
            },
            {
                id: 19,
                name: "Oakland Alameda Water Shuttle",
                category: "Transportation",
                description: "Free wheelchair accessable transportation between Oakland and Alameda",
                url: "https://www.alamedaca.gov/Departments/Planning-Building-and-Transportation/Transportation/Oakland-Alameda-Water-Shuttle",
                image: "/images/water-shuttle.jpeg"
            },
            {
                id: 20,
                name: "Rhythmix Cultural Center",
                category: "Community",
                description: "Rhythmix Cultural Works brings people of all ages together to experience and explore music, dance, visual art and educational opportunities. The organization seeks to build community by inspiring engagement in the arts as a way to learn about each other and the world. With a strong commitment to provide programming relevant to the local population, Rhythmix strives to promote cultural awareness, encourage participation in the arts, and support artists in the presentation of their work.",
                url: "https://www.rhythmix.org/",
                image: "/images/Rhythmix_logo-300x250.jpg"
            },
            {
                id: 21,
                name: "Alameda Leauge of Women Voters",
                category: "Organization",
                description: "The League of Women Voters of Alameda is a nonpartisan, volunteer-led organization committed to empowering voters and defending democracy. Since our beginning, we’ve worked to educate the public on critical issues, promote informed participation in government, and advocate for policies that support equity and civic engagement in Alameda and beyond.",
                url: "https://www.lwvalameda.org/",
                image: "/images/LWV.avif"
            },
        ];

        // DOM Elements
        const directoryList = document.getElementById('directoryList');
        const addBtn = document.getElementById('addBtn');
        const addModal = document.getElementById('addModal');
        const closeModal = document.getElementById('closeModal');
        const listingForm = document.getElementById('listingForm');
        const uploadBtn = document.getElementById('uploadBtn');
        const listingImage = document.getElementById('listingImage');
        const imagePreview = document.getElementById('imagePreview');
        const categoryBtns = document.querySelectorAll('.category-btn');

        // Current listings
        let listings = [...sampleListings];
        let currentCategory = 'All';

        // Display listings
        function displayListings() {
            directoryList.innerHTML = '';
            
            const filteredListings = currentCategory === 'All' 
                ? listings 
                : listings.filter(listing => listing.category === currentCategory);
            
            if (filteredListings.length === 0) {
                directoryList.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <i class="fas fa-folder-open text-4xl text-gray-400 mb-4"></i>
                        <h3 class="text-xl font-medium text-gray-600">No listings found</h3>
                        <p class="text-gray-500 mt-2">Try adding a new listing or selecting a different category</p>
                    </div>
                `;
                return;
            }
            
            filteredListings.forEach(listing => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-xl shadow-md overflow-hidden transition duration-300 card-hover';
                card.innerHTML = `
                    <div class="h-48 overflow-hidden">
                        <img src="${listing.image}" alt="${listing.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-lg font-bold text-gray-800">${listing.name}</h3>
                            <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">${listing.category}</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">${listing.description}</p>
                        <div class="flex justify-between items-center">
                            <a href="${listing.url}" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                                Visit Website <i class="fas fa-external-link-alt ml-1"></i>
                            </a>
                            <button class="text-gray-400 hover:text-gray-600" onclick="deleteListing(${listing.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                directoryList.appendChild(card);
            });
        }

        // Add new listing
        listingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('listingName').value;
            const category = document.getElementById('listingCategory').value;
            const description = document.getElementById('listingDescription').value;
            const url = document.getElementById('listingUrl').value;
            
            // Get image (either uploaded or placeholder)
            let image = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';
            
            if (listingImage.files && listingImage.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    image = e.target.result;
                    addListingToArray(name, category, description, url, image);
                };
                reader.readAsDataURL(listingImage.files[0]);
            } else {
                addListingToArray(name, category, description, url, image);
            }
        });

        function addListingToArray(name, category, description, url, image) {
            const newListing = {
                id: Date.now(),
                name,
                category,
                description,
                url,
                image
            };
            
            listings.push(newListing);
            listingForm.reset();
            imagePreview.innerHTML = '<span class="text-gray-500">No image selected</span>';
            imagePreview.style.backgroundImage = 'none';
            toggleModal();
            displayListings();
        }

        // Delete listing
        window.deleteListing = function(id) {
            if (confirm('Are you sure you want to delete this listing?')) {
                listings = listings.filter(listing => listing.id !== id);
                displayListings();
            }
        };

        // Image upload
        uploadBtn.addEventListener('click', function() {
            listingImage.click();
        });

        listingImage.addEventListener('change', function() {
            if (listingImage.files && listingImage.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.style.backgroundImage = `url(${e.target.result})`;
                    imagePreview.innerHTML = '';
                };
                reader.readAsDataURL(listingImage.files[0]);
            }
        });

        // Category filter
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('bg-indigo-600', 'text-white'));
                categoryBtns.forEach(b => b.classList.add('bg-gray-200', 'hover:bg-gray-300'));
                
                this.classList.remove('bg-gray-200', 'hover:bg-gray-300');
                this.classList.add('bg-indigo-600', 'text-white');
                
                currentCategory = this.textContent.trim();
                displayListings();
            });
        });

        // Modal toggle
        function toggleModal() {
            addModal.classList.toggle('hidden');
        }

        addBtn.addEventListener('click', toggleModal);
        closeModal.addEventListener('click', toggleModal);

        // Close modal when clicking outside
        addModal.addEventListener('click', function(e) {
            if (e.target === addModal) {
                toggleModal();
            }
        });

        // Admin mode toggle
        let adminMode = false;
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.altKey && e.key === 'a') {
                adminMode = !adminMode;
                const addBtn = document.getElementById('addBtn');
                const adminIndicator = document.getElementById('adminIndicator');
                if (adminMode) {
                    addBtn.classList.remove('hidden');
                    adminIndicator.classList.remove('hidden');
                } else {
                    addBtn.classList.add('hidden');
                    adminIndicator.classList.add('hidden');
                }
            }
        });

        // Initialize
        displayListings();