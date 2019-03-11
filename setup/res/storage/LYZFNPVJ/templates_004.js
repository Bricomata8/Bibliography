angular.module("templates.xpl.product").run(["$templateCache", function($templateCache) {$templateCache.put("product/tabs/algorithms/algorithms-component.html","<section class=\"algorithms-tab document-tab u-p-2\">\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\n	</div>\n	<div ng-if=\"!vm.loading && (vm.details.algorithms.length == 0) && (vm.details.datasets.length == 0)\">No algorithms found for this\n		document.</div>\n	<div ng-if=\"!vm.loading && (vm.details.algorithms.length > 0 || vm.details.datasets.length > 0)\" xpl-tab-accordion>\n		<div class=\"supplement-type-filter-container\">\n			<div class=\"togbut-group\">\n				<div class=\"togbut\" ng-class=\"{\'active\': vm.activeSupplementTypeFilter === \'code\', \'disabled\': vm.details.algorithms.length == 0}\" ng-click=\"vm.applySupplementTypeFilter(\'code\')\">\n					Code\n				</div>\n				<div class=\"togbut\" ng-class=\"{\'active\': vm.activeSupplementTypeFilter === \'dataset\', \'disabled\': vm.details.datasets.length == 0}\" ng-click=\"vm.applySupplementTypeFilter(\'dataset\')\">\n					Dataset\n				</div>\n			</div>	\n		</div>\n\n		<div class=\"supplement-container row\" ng-show=\"vm.activeSupplementTypeFilter === \'code\'\">\n			<div class=\"col-12 u-pb-1 supplement-description\">\n				This article contains code hosted on IEEE\'s partner, Code Ocean, a\n				cloud-based computational reproducibility platform that enables\n				users to run, modify, and download code from IEEE <i>Xplore</i> articles. A Code Ocean user account is required to run and modify code within\n				the widget below.\n			</div>\n\n			<div class=\"col-12 algorithm-code-container\" ng-repeat=\"repo in ::vm.details.algorithms\">\n				<div class=\"col-12\"\n					ng-repeat=\"algorithm in repo[\'supplement-alg-dataset\'] track by $index\"\n					class=\"stats-algorithms-container\">\n					<button type=\"button\" id=\"{{$index}}\"\n						class=\"accordion-button algorithm-code-button row u-flex-wrap-nowrap\"\n						ng-class=\"{\'accordion-section-expanded\': selected == {{$index}} && \'{{algorithm.widgetUrl}}\' !== \'\', \'disabled\': \'{{algorithm.widgetUrl}}\' == \'\'}\"\n						ng-click=\"toggleSection($index)\">\n						<div class=\"col-11\">\n							<div class=\"row u-flex-wrap-nowrap\">\n								<div class=\"col-1 u-align-left algorithm-code-text\"><strong>Code:</strong></div>\n								<div class=\"col-auto accordion-button-header\">\n									<span class=\"algorithm-name\"> {{::algorithm.name}}</span>\n								</div>\n								<div class=\"col-2 nowrap\">\n									<span ng-if=\"algorithm.language\" class=\"algorithm-language-icon\"><i class=\"icon-algorithm-{{::algorithm.icon}}\"></i></span><span class=\"algorithm-name\">{{::algorithm.language}}</span>\n								</div>\n							</div>\n						</div>\n						\n						<div class=\"col-1\">\n							<i ng-if=\"algorithm.widgetUrl\"\n							class=\"fa fa-chevron-down accordion-button-icon\"\n							ng-class=\"selected == {{$index}} ? \'up\' : \'\'\"></i>\n						</div>\n					</button>\n\n					<div class=\"algorithm-error-msg\" ng-if=\"!algorithm.widgetUrl\">\n						<h2>The associated code for this article is being processed.\n							Please check back later.</h2>\n					</div>\n\n					<div ng-if=\"algorithm.widgetUrl\" class=\"col-12 u-pb-1\"\n						id=\"code-ocean-{{$index}}\" ng-show=\"selected == {{$index}}\">\n						<xpl-code-ocean config=\"algorithm\" idx=\"{{$index}}\"></xpl-code-ocean>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"supplement-container row\" ng-show=\"vm.activeSupplementTypeFilter === \'dataset\'\">\n			<div class=\"col-12 u-pb-1 supplement-description\">\n				This article contains datasets made available via IEEE DataPort, a repository of datasets\n				intended to facilitate analysis and enable reproducible research. Click the dataset name\n				below to access it on the IEEE DataPort website.\n			</div>\n			<!-- <div class=\"col-12  dataset-container\"\n				ng-repeat=\"dataset in ::vm.details.datasets track by $index\"\n				class=\"stats-algorithms-container\">\n				<div class=\"col-12 u-pb-1 dataset-name-container\">\n					<strong>Dataset Name: </strong>\n					<a target=\"blank\" href=\"{{::dataset.link}}\">{{::dataset.name}}</a>\n					<strong><a target=\"blank\" href=\"{{::dataset.link}}\">Dataport {{::dataset.repository}}</a></strong>\n					<i class=\"icon dataset-external-icon\"></i>\n				</div>\n			</div> -->\n			<div class=\"col-12 dataset-container\" ng-repeat=\"repo in ::vm.details.datasets\">\n				<div class=\"col-12\"\n				ng-repeat=\"dataset in repo[\'supplement-alg-dataset\']\"\n				class=\"stats-algorithms-container\">\n					<div class=\"col-12 u-pb-1 dataset-name-container\">\n						<strong>Dataset Name: </strong>\n						<a target=\"blank\" href=\"{{::dataset.link}}\">{{::dataset.name}}</a>\n						<strong>{{repo.repository == \"dataport\" ? \"IEEE DataPort\":\"\"}}<i class=\"icon dataset-external-icon\"></i></strong>\n					</div>\n				</div>\n			</div>\n		</div>\n			\n		</div>\n	</div>\n</section>\n");
$templateCache.put("product/tabs/authors/authors-component.html","<section class=\"authors-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	<div ng-if=\"!vm.loading && !vm.details.authors.length\">\r\n		No authors found for this document.\r\n	</div>\r\n	<div ng-if=\"vm.details.authors.length > 0\" class=\"stats-authors-carousel-container\">\r\n		<xpl-carousel items=\"vm.details.authors\" item-template-url=\"common/components/author-component.html\"  view-all-state=\"{name: \'document.full\', params: {q:null,ctx:\'authors\',part:null,tab:\'authors\',section:null,anchor:\'authors\',tabFilter:null}}\" pageSize=\"3\"/>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/citations/citations-component.html","<section class=\"citations-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	<div ng-if=\"!vm.loading && !vm.details.paperCitations.ieee && !vm.details.paperCitations.nonIeee && !vm.details.patentCitations\">\r\n		Citations are not available for this document.\r\n	</div>\r\n	<div ng-if=\"vm.details.paperCitations.ieee || vm.details.paperCitations.nonIeee || vm.details.patentCitations\" class=\"stats-citations\">\r\n		<div class=\"tab-section-header\">\r\n			<span>Citations</span>\r\n			<xpl-cmpt-citation-map-button article-number=\"{{::vm.id}}\"></xml-cmpt-citation-map-button>\r\n		</div>\r\n		\r\n		<div class=\"citations-type-filter-container\">\r\n			<div class=\"togbut-group\">\r\n				<div class=\"togbut\" ng-class=\"{\'active\': vm.activeTypeFilter === \'papers\', \'disabled\': !vm.details.paperCitations.ieee && !vm.details.paperCitations.nonIeee}\" ng-click=\"vm.applyTypeFilter(\'papers\')\">\r\n					By Papers\r\n				</div>\r\n				<div class=\"togbut\" ng-class=\"{\'active\': vm.activeTypeFilter === \'patents\', \'disabled\': !vm.details.patentCitations}\" ng-click=\"vm.applyTypeFilter(\'patents\')\">\r\n					By Patents\r\n				</div>\r\n			</div>	\r\n		</div>\r\n		<div class=\"citations-pub-filter-container\" ng-show=\"vm.activeTypeFilter=== \'papers\'\">\r\n			<a class=\"citations-pub-filter\" ng-class=\"{\'active\': vm.activePublisherFilter === \'ieee\', \'disabled\': !vm.details.paperCitations.ieee}\" ng-click=\"vm.applyPublisherFilter(\'ieee\')\">IEEE Publications ({{::vm.details.ieeeCitationCount ? vm.details.ieeeCitationCount : 0}})</a>\r\n			<a class=\"citations-pub-filter\" ng-class=\"{\'active\': vm.activePublisherFilter === \'nonIeee\', \'disabled\': !vm.details.paperCitations.nonIeee}\" ng-click=\"vm.applyPublisherFilter(\'nonIeee\')\">Other Publications ({{::vm.details.nonIeeeCitationCount ? vm.details.nonIeeeCitationCount : 0}})</a>\r\n		</div>\r\n		\r\n		<div class=\"stats-citations-carousel-container\" data-tealium_data=\'{\"citationsByType\": \"{{vm.activeTypeFilter}}\", \"citationsByPublisher\": \"{{vm.activePublisherFilter}}\"}\'>\r\n			<xpl-carousel items=\"vm.activeItems\" item-template-url=\"common/components/citation-component.html\" view-all-state=\"vm.viewAllState\" pageSize=\"3\"/>\r\n		</div>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/definitions/definitions-component.html","<section class=\"definitions-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	\r\n	<div ng-if=\"!vm.loading && !vm.deniedDefinitionsAccess\">\r\n		<div ng-if=\"!vm.details.standardTerms\">\r\n			Definitions terms not available for this standard.\r\n		</div>\r\n		\r\n		<div ng-if=\"vm.details.standardTerms\">\r\n			<div class=\"tab-section-header\">Standards Dictionary Terms</div>\r\n			\r\n			<div>\r\n				The definitions below contain terms from the IEEE Standards Dictionary, a comprehensive database of standards terminology.\r\n			</div>\r\n		</div>\r\n	</div>\r\n	\r\n	<!-- If user has no access, show Sign In link -->\r\n	<div ng-if=\"!vm.loading && vm.deniedDefinitionsAccess\">\r\n		<div class=\"tab-no-access-signin-container\" ng-if=\"!vm.document.fullTextAccess && !vm.document.canAddToFileCabinet\">\r\n			<a xpl-cmpt-sip-modal-trigger tabindex=\"0\" purchase-options=\"::vm.document.purchaseOptions\" publisher=\"{{::vm.document.publisher}}\" user-info=\"::vm.document.userInfo\" chorus-pdf-path=\"{{::vm.document.chorusPdfPath}}\">Sign in to view</a>\r\n		</div>\r\n		<div class=\"tab-no-access-signin-container\" ng-if=\"!vm.document.fullTextAccess && vm.document.canAddToFileCabinet\">\r\n			<a class=\"open-html\" tabindex=\"0\" data-url=\"{{::vm.document.htmlLink}}\" data-artnum=\"{{::vm.document.articleNumber}}\" data-bkn=\"false\">Sign in to view</a>\r\n		</div>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/figures/figures-component.html","<section class=\"figures-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	<div ng-if=\"!vm.loading\">\r\n		<div ng-if=\"vm.document.fullTextAccess\">\r\n			<div ng-if=\"!vm.details.figures\">\r\n				Figures are not available for this document.\r\n			</div>\r\n			<div ng-if=\"vm.details.figures\" class=\"stats-figures-carousel-container\">\r\n				<xpl-figures layout=\"carousel\" media-path=\"{{::vm.details.mediaPath}}\" figures=\"vm.details.figures\" />\r\n			</div>\r\n		</div>\r\n		\r\n		<!-- If user has no access, show Sign In link -->\r\n		<div class=\"tab-no-access-signin-container stats-figures-signIn-container\" ng-if=\"!vm.document.fullTextAccess && !vm.document.canAddToFileCabinet\">\n			<a xpl-cmpt-sip-modal-trigger tabindex=\"0\" purchase-options=\"::vm.document.purchaseOptions\" publisher=\"{{::vm.document.publisher}}\" user-info=\"::vm.document.userInfo\" chorus-pdf-path=\"{{::vm.document.chorusPdfPath}}\" class=\"stats-figures-signInToView\">Sign in to view</a>\n		</div>\n		<div class=\"tab-no-access-signin-container stats-figures-signIn-container\" ng-if=\"!vm.document.fullTextAccess && vm.document.canAddToFileCabinet\">\n			<a class=\"open-html\" tabindex=\"0\" data-url=\"{{::vm.document.htmlLink}}\" data-artnum=\"{{::vm.document.articleNumber}}\" data-bkn=\"false\" class=\"stats-figures-signInToView\">Sign in to view</a>\n		</div>\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/keywords/keywords-component.html","<section class=\"keywords-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	\r\n	<div ng-if=\"!vm.loading && !vm.details.keywords.length\">\r\n		Keywords are not available for this document.\r\n	</div>\r\n	\r\n	<div ng-if=\"vm.details.keywords.length\" class=\"stats-keywords-container\">\r\n		<ul class=\"doc-keywords-list stats-keywords-list\">\r\n			<li ng-repeat=\"keyword in vm.details.keywords | limitTo: 4\" class=\"doc-keywords-list-item\" ng-init=\"vm.keywordCountGreaterThanLimit=false\">\r\n				<strong>{{::keyword.type}}</strong>\r\n				<!-- NOTE: Make list inline with no bullet -->\r\n				<ul class=\"u-mt-1 u-p-0 List--no-style List--inline\">\r\n					<li ng-repeat=\"term in ::keyword.kwd track by $index\">\r\n						<a ng-href=\'/search/searchresult.jsp?matchBoolean=true&queryText=\"Index%20Terms\":.QT.{{::term | endecaSearchValues}}.QT.&newsearch=true\' ng-bind-html=\"::term\" data-tealium_data=\'{\"keywordType\": \"{{::keyword.type}}\", \"keyword\": \"{{::term}}\"}\' class=\"stats-keywords-list-item\"></a>{{$last ? \'\' : \', \'}} {{($last && vm.keywordTypesExceedingLimit.indexOf(keyword.type) !== -1) ? \'&hellip;\' : \'\'}}\r\n					</li> \r\n				</ul>\r\n			</li>\r\n		</ul>\r\n		<div class=\"u-align-center\">\r\n			<a \r\n			class=\"doc-keywords-viewall-link stats-keywords-link-viewAll\" \r\n			ng-click=\"vm.expandSection(\'keywords\'); vm.scrollToAnchor(\'keywords-anchor\', 120)\"> View All\r\n			</a>\r\n		</div>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/media/media-component.html","<section class=\"media-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	\r\n	<div ng-if=\"!vm.loading && !vm.details.multimedia\">\r\n		Media not available for this document.\r\n	</div>\r\n	\r\n	<div class=\"media-table\" ng-if=\"vm.details.multimedia\">\r\n		<div class=\"media-table-row header\" ng-class=\"{\'match-scroll-width\': vm.details.multimedia.length > 3}\">\r\n			<div class=\"media-table-cell name\">\r\n				Associated Files\r\n			</div>\r\n			<div class=\"media-table-cell description\">\r\n				Description\r\n			</div>\r\n			<div class=\"media-table-cell type\">\r\n				Type &amp; Format\r\n			</div>\r\n			<div class=\"media-table-cell size\">\r\n				Size\r\n			</div>\r\n		</div>\r\n		<div class=\"media-table-rows-container\">\r\n			<div class=\"media-table-row file\" ng-repeat=\"file in vm.details.multimedia\">\r\n				<div class=\"media-table-cell name\">\r\n					<div class=\"media-name-container\">\r\n						<div class=\"media-type\">\r\n							<i class=\"icon icon-media-image\" ng-if=\"::file.mediaType === \'image\'\"></i>\r\n							<i class=\"icon icon-media-video\" ng-if=\"::file.mediaType === \'video\'\"></i>\r\n							<i class=\"icon icon-media-ppt\" ng-if=\"::file.mediaType === \'ppt\'\"></i>\r\n							<i class=\"icon icon-media-other\" ng-if=\"::file.mediaType === \'other\'\"></i>\r\n						</div>\r\n						<div class=\"media-name\">\r\n							<div class=\"media-name-text\">\r\n								{{::file.title}}\r\n							</div>\r\n							<div class=\"media-dl\">\r\n								<a class=\"media-dl-link\" ng-href=\"{{::file.filePath}}?tp=&amp;arnumber={{::vm.details.articleNumber}}\" ng-if=\"::vm.document.fullTextAccess\">\r\n									<i class=\"icon media-dl-icon\"></i> Download\r\n								</a>\r\n								<a class=\"media-dl-link\" ng-if=\"!vm.document.fullTextAccess\" tabindex=\"0\" xpl-cmpt-sip-modal-trigger purchase-options=\"::vm.document.purchaseOptions\" publisher=\"{{::vm.document.publisher}}\" user-info=\"::vm.document.userInfo\" chorus-pdf-path=\"{{::vm.document.chorusPdfPath}}\">\r\n									<i class=\"icon media-dl-icon\"></i> Download\r\n								</a> \r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"media-table-cell description\">\r\n					<span ng-bind-html=\"::file.description\" ng-if=\"::file.description\"></span>\r\n					<span ng-if=\"::!file.description\">Description not available. </span>\r\n				</div>\r\n				<div class=\"media-table-cell type\">\r\n					<span ng-if=\"::file.mediaType === \'image\'\">Image/PG</span>\r\n					<span ng-if=\"::file.mediaType === \'video\'\">Video/MP4</span>\r\n					<span ng-if=\"::file.mediaType === \'ppt\'\">Presentation Slide/PPT</span>\r\n					<span ng-if=\"::file.mediaType === \'other\'\">Other</span>\r\n				</div>\r\n				<div class=\"media-table-cell size\">\r\n					{{::file.fileSize}}\r\n				</div>\r\n			</div>\r\n		</div>\r\n		\r\n		<div class=\"media-disclaimer\">\r\n		    <div ng-if=\"::vm.details.isSMPTE\"  class=\"media-disclaimer-text\">\r\n				By downloading these files, you are consenting to our <a href=\"https://www.smpte.org/standards/EULA\">end user license agreement.</a>\r\n			</div>\r\n		    \r\n			<div class=\"media-disclaimer-text\">\r\n			    If you have any problems downloading a file, please complete the <a href=\"/xpl/techform.jsp\">Technical Support Form</a> or see our <a href=\"/Xplorehelp/Help_Multimedia.html\">Media FAQ</a>.\r\n			</div>\r\n		</div>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/metrics/metrics-component.html","<section class=\"metrics-tab document-tab\">\r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	<div ng-if=\"!vm.loading && !vm.details.metrics\">\r\n		No metrics found for this document.\r\n	</div>\r\n	<div ng-if=\"vm.details.metrics\">\r\n		<div class=\"metrics-info-container\">\r\n			<xpl-cmpt-product-metrics-usage years=\"::vm.details.metrics.biblio\" ng-if=\"::vm.details.metrics.biblio.length > 0\"></xpl-cmpt-product-metrics-usage>\r\n			\r\n			<div class=\"citations-container\">\r\n				<div class=\"tab-section-header\">\r\n					<span>Citations</span>\r\n					<a target=\"blank\" href=\"/Xplorehelp/Help_Working_with_Abstracts.htm#citations\" title=\"Help Working with Metrics\" text=\"Help\" class=\"metrics-tab-help-icon\"></a>\r\n				</div>\r\n				<div class=\"citations-info stats-metrics-citations\" ng-class=\"{\'u-pt-2\': +vm.details.metrics.crossref_count || +vm.details.metrics.scopus_count || +vm.details.metrics.wos_count || vm.details.metrics.doi}\">\r\n					<!--`+` is overloaded operator that converts stringified numbers to Number object-->\r\n					<a class=\"citations-button regular\" ui-sref=\"document.full({tab:\'citations\', q:null, ctx:null, section:null, part:null, anchor:null, tabFilter:null})\" ng-if=\"::+vm.details.metrics.crossref_count > 0\" data-tealium_data=\'{\"citationsIn\": \"Crossref\"}\'>\r\n						<div class=\"citations-button-count\">{{::vm.details.metrics.crossref_count | number:0}}</div>\r\n						<div class=\"citations-button-text\">Crossref<sup>&reg;</sup></div>\r\n					</a>\r\n					<a class=\"citations-button regular\" href=\"{{::vm.details.metrics.scopus_url}}\" ng-if=\"::+vm.details.metrics.scopus_count > 0\" data-tealium_data=\'{\"citationsIn\": \"Scopus\"}\'>\r\n						<div class=\"citations-button-count\">{{::vm.details.metrics.scopus_count | number:0}}</div>\r\n						<div class=\"citations-button-text\">Scopus<sup>&reg;</sup></div>\r\n					</a>\r\n					<a class=\"citations-button regular\" href=\"{{::vm.details.metrics.wos_url}}\" ng-if=\"::+vm.details.metrics.wos_count > 0\" data-tealium_data=\'{\"citationsIn\": \"Scopus\"}\'>\r\n						<div class=\"citations-button-count\">{{::vm.details.metrics.wos_count | number:0}}</div>\r\n						<div class=\"citations-button-text wos\">Web<br />of Science<sup>&reg;</sup></div>\r\n					</a>\r\n					<a class=\"citations-button google-scholar\" href=\"http://scholar.google.com/scholar?hl=en&lr=&cites=http://dx.doi.org/{{::vm.details.metrics.doi}}\" ng-if=\"::vm.details.metrics.doi\" data-tealium_data=\'{\"citationsIn\": \"GoogleScholar\"}\'>\r\n						<div class=\"citations-button-text google-scholar\">Search for<br>Citations in<br>Google Scholar<sup>&reg;</sup></div>\r\n					</a>\r\n					<div class=\"\" ng-if=\"::!+vm.details.metrics.crossref_count && !+vm.details.metrics.scopus_count && !+vm.details.metrics.wos_count && !vm.details.metrics.doi\">\r\n						No related citations found.\r\n					</div>\r\n				</div>\r\n			</div>\r\n			\r\n			<div class=\"sharing-container\">\r\n				<div class=\"tab-section-header\">\r\n					<span>Online Sharing Activity</span>\r\n					<a target=\"blank\" href=\"/Xplorehelp/#/ieee-xplore-training/working-with-documents#working-with-abstracts\" title=\"Help Working with Metrics\" text=\"Help\" class=\"metrics-tab-help-icon\"></a>\r\n				</div>\r\n				<div class=\"sharing-info\">\r\n					<div class=\"altmetric\" ng-if=\"::vm.details.metrics.doi\">\r\n						<div class=\"altmetric-acknowledgement\">\r\n							Powered by Altmetric\r\n						</div>\r\n						<div\r\n							data-badge-details=\"right\"\r\n							data-badge-type=\"medium-donut\"\r\n							data-doi=\"{{::vm.details.metrics.doi}}\"\r\n							data-no-score=\"true\"\r\n							data-condensed=\"true\"\r\n							data-hide-no-mentions=\"true\"\r\n							class=\"altmetric-embed\">\r\n						</div>\r\n						<script>\r\n							var almetricsNode = document.createElement(\'script\');\r\n							almetricsNode.setAttribute(\'src\',\'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js\');\r\n							almetricsNode.setAttribute(\'async\',\'async\');\r\n							document.head.appendChild(almetricsNode);\r\n							\r\n							altmetricsEmbeddedNode = document.getElementsByClassName(\'altmetric-embed\')[0];\r\n							altmetricsDivNode = document.getElementsByClassName(\'sharing-container\')[0];\r\n							\r\n							altmetricsEmbeddedNode.addEventListener(\'altmetric:show\', function(){\r\n								altmetricsDivNode.style.visibility = \'visible\';\r\n							});\r\n						</script>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			\r\n		</div>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("product/tabs/references/references-component.html","<section class=\"references-tab document-tab\"> \r\n	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n	<div ng-if=\"!vm.loading && !vm.details.references.length\">\r\n		References are not available for this document.\r\n	</div>\r\n	<div ng-if=\"vm.details.references.length > 0\" class=\"stats-references-carousel-container\">\r\n		<div class=\"tab-section-header\">\r\n			<span>References</span>\r\n			<xpl-cmpt-citation-map-button article-number=\"{{::vm.id}}\"></xpl-cmpt-citation-map-button>\r\n			<a class=\"ref-normative-link\" ng-if=\"vm.showNormativeRefLink\" ng-click=\"vm.scrollToAnchor(\'sec2\', 120)\" href><i class=\"fa fa-file ref-normative-link-icon\"></i>View Normative References</a>\r\n		</div>\r\n		<xpl-carousel items=\"vm.details.references\" item-template-url=\"common/components/reference-component.html\" pageSize=\"3\" view-all-state=\"{name: \'document.full\', params: {q:null,ctx:\'references\',part:null,tab:\'references\',section:null,anchor:\'references\',tabFilter:null}}\" />\r\n	</div>\r\n</section>\r\n ");
$templateCache.put("product/tabs/versions/versions-component.html","  <div>\r\n  	<div class=\"Loading-content\" ng-if=\"vm.loading\">\r\n		<i class=\"fa fa-spinner fa-5x fa-spin\"></i>\r\n	</div>\r\n    <xpl-cmpt-document-full-text-evolution ng-if=\"!vm.loading\" evolution-list=\"vm.details.versions\"></xpl-cmpt-document-full-text-evolution>\r\n  </div>");
$templateCache.put("product/tabs/metrics/usage/usage-component.html","<div class=\"usage-container\"> <!-- Styling is in document.less -->\r\n	<div class=\"tab-section-header\">\r\n		<span>Usage</span>\r\n		<a target=\"blank\" href=\"/Xplorehelp/Help_Working_with_Abstracts.htm#downloads\" title=\"Help Working with Metrics\" text=\"Help\" class=\"metrics-tab-help-icon\"></a>\r\n	</div>\r\n	<div class=\"usage-info\">\r\n		<nav class=\"usage-tabs-nav\">\r\n			<ul class=\"usage-tabs\">\r\n				<li class=\"usage-tabs-link\" ng-repeat=\"yearUsage in vm.years\" ng-class=\"{\'active\': vm.activeYear.year === yearUsage.year}\">\r\n					<a ng-click=\"vm.viewYear(yearUsage)\">{{::yearUsage.year}}</a>\r\n				</li>\r\n			</ul>\r\n		</nav>\r\n		<div class=\"usage-details-container\" ng-if=\"vm.activeYear\"> \r\n			<div class=\"usage-details-chart\">\r\n				<div class=\"usage-details-table-container\">\r\n					<div class=\"usage-details-table\">\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Jan</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Jan}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Feb</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Feb}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Mar</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Mar}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Apr</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Apr}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">May</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.May}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Jun</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Jun}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Jul</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Jul}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Aug</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Aug}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Sep</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Sep}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Oct</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Oct}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Nov</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Nov}}</div>\r\n						</div>\r\n						<div class=\"usage-details-table-cellgroup\">\r\n							<div class=\"usage-details-table-month\">Dec</div>\r\n							<div class=\"usage-details-table-count\">{{vm.activeYear.Dec}}</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"usage-details-total-container\">\r\n					<div class=\"usage-details-total-count\">\r\n						{{vm.activeYear.totalArticleDownloads}}\r\n					</div>\r\n					<div class=\"usage-details-total-since\">\r\n						<span>Total usage<br />since</span>\r\n						<span>{{vm.activeYear.totalArticleDownloadsSince}}</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"usage-details-text-container\">\r\n				<div class=\"usage-details-text\">\r\n					<span>Best Month:</span>\r\n					<span>{{vm.activeYear.bestMonthInYearString}}</span>\r\n				</div>\r\n				<div class=\"usage-details-text\">\r\n					<span>Year Total:</span>\r\n					<span>{{vm.activeYear.yearToDateDownloads}}</span>\r\n				</div>\r\n				<div class=\"usage-details-text-small\">* Data is updated on a monthly basis. Usage includes PDF downloads and HTML views.</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n");}]);