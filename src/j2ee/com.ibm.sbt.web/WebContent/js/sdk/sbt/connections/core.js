/*
 * � Copyright IBM Corp. 2012
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
 * implied. See the License for the specific language governing 
 * permissions and limitations under the License.
 */


/**
 * Social Business Toolkit SDK. 
 * 
 * Helpers for the core Connections capabilities
 */
define(['sbt/config'],function(sbt) {
	return sbt.connections = {
		// Namespaces used when parsing the Connections Atom feeds
		namespaces: {
			app:		"http://www.w3.org/2007/app",
			thr:		"http://purl.org/syndication/thread/1.0",
			fh:			"http://purl.org/syndication/history/1.0",
			snx:		"http://www.ibm.com/xmlns/prod/sn",
			opensearch:	"http://a9.com/-/spec/opensearch/1.1/",
			a:			"http://www.w3.org/2005/Atom",
			h:			"http://www.w3.org/1999/xhtml",
			td: 		"urn:ibm.com/td"
		},
		profileUrls: {
			profileServiceBaseUrl:"/profiles",
			getProfile:         "/atom/profile.do",
			updateProfile:		"/atom/profileEntry.do",
			createProfile:		"/profiles/admin/atom/profiles.do",
			deleteProfile:		"/profiles/admin/atom/profileEntry.do",
			updateProfilePhoto:	"/photo.do",
			getColleagues:		"/atom/connections.do"
		},
		ActivityStreamUrls: {
			activityStreamBaseUrl:         "/connections/opensocial/",
			activityStreamRestUrl:         "/rest/activitystreams/"
		},
		communitiesUrls: {
		    communitiesServiceBaseUrl:"/communities/service/atom",
		    allCommunities : "/communities/service/atom/communities/all",
            myCommunities : "/communities/service/atom/communities/my",
			getCommunity:		"/community/instance",
			updateCommunity:	"/community/instance",
			createCommunity:	"/communities/my",
			deleteCommunity:	"/community/instance",			
			addCommunityMember:"/community/members",
			removeCommunityMember:"/community/members",
			getCommunityMember:"/community/members"
		},
		fileUrls: {
			publicFiles : "/files/basic/anonymous/api/documents/feed?visibility=public",
            pinnedFiles : "/files/basic/api/myfavorites/documents/feed",
            folders : "/files/basic/api/collections/feed",
            pinnedFolders : "/files/basic/api/myfavorites/collections/feed",
            activeFolders : "/files//basic/api/collections/addedto/feed", // Folders you recently added files too.
            publicFolders : "/files/basic/anonymous/api/collections/feed",
            library : "/files/basic/api/myuserlibrary/feed",
            shares : "/files/basic/api/documents/shared/feed", // only lists files shared with you.
            recycledFiles : "/files/basic/api/myuserlibrary/view/recyclebin/feed",
            fileComments : "/files/basic/api/userlibrary/${userId}/document/${fileId}/feed?category=comment",
            fileShares : "/files/basic/api/documents/shared/feed"
		},
		profileUrls: {
		    profile : "/profiles/atom/profile.do", 
            reportingChain : "/profiles/atom/reportingChain.do?outputType=profile&format=full", 
            colleagues: "/profiles/atom/connections.do?connectionType=colleague&outputType=profile&format=full" , 
            peopleManaged: "/profiles/atom/peopleManaged.do",
            statusUpdates: "/profiles/atom/mv/theboard/entries.do?outputType=profile&format=full",
            connectionsInCommon: "/profiles/atom/connectionsInCommon.do?connectionType=colleague&outputType=profile&format=full"
		},
		searchUrls: {
		    searchPeople: "/search/atom/search/facets/people",
            searchTags: "/search/atom/search/facets/tags",
            searchApps: "/search/atom/search/facets/source",
            searchAll: "/search/atom/mysearch/results"
		}
	};
});