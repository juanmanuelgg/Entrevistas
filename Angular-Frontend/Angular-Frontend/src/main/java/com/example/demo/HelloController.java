/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
  @RequestMapping("/hello")
  String index() {
    return "hello you!";
  }

  // JMGG: Keep this for the future
  /**
   * (Optional) App Engine health check endpoint mapping.
   *
   * @see <a
   *     href="https://cloud.google.com/appengine/docs/flexible/java/how-instances-are-managed#health_checking"></a>
   *     If your app does not handle health checks, a HTTP 404 response is interpreted as a
   *     successful reply.
   */
  @RequestMapping("/_ah/health")
  public String healthy() {
    // Message body required though ignored
    return "Still surviving.";
  }
}
